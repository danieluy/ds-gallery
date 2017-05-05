import React, { Component } from 'react';
import './DsGallery.css';
import Hammer from 'react-hammerjs';
import DsRoll from './DsRoll';
import DsControls from './DsControls';
import ContextMenu from './ContextMenu';

class DsGallery extends Component {

  constructor(props) {
    super();
    this.state = {
      index: {
        current: 0
      },
      images: props.images,
      animation: {
        name: 'initial_0',
        duration: props.options ? props.options.animation_duration_ms || 300 : 300,
        x_start: 0,
        x_end: 0
      },
      gallery: {
        self: null,
        width: 0,
        height: 0,
        roll_width: 10000
      },
      context_menu: {
        x: 0,
        y: 0,
        display: false
      }
    }
    window.addEventListener('resize', this.setGalleryState.bind(this));
  }

  componentDidMount() {
    this.setGalleryState();
  }

  updateRollAnimationState() {
    let name = this.state.animation.name.split('_');
    this.setState({
      animation: {
        name: `${name[0]}_${parseInt(name[1], 10) + 1}`,
        duration: this.state.animation.duration,
        x_start: this.state.animation.x_end,
        x_end: this.state.gallery.width * this.state.index.current * -1
      }
    })
  }

  setGalleryState() {
    if (this.state.gallery.self)
      this.setState({
        gallery: {
          width: this.state.gallery.width,
          height: this.state.gallery.height,
          roll_width: this.state.gallery.width * this.state.images.length
        }
      })
    else {
      let gallery = document.getElementById('ds-gallery-wrapper'); // TODO findout how do I do this with React
      this.setState({
        gallery: {
          self: gallery,
          width: gallery.offsetWidth,
          height: gallery.offsetHeight,
          roll_width: gallery.offsetWidth * this.state.images.length
        }
      })
    }
  }

  jumpToImage(index) {
    this.setState({
      index: {
        current: index
      }
    }, () => this.updateRollAnimationState.call(this))
  }

  nextImage() {
    if (this.state.images.length > 1) {
      this.setState({
        index: {
          current: this.state.index.current === this.state.images.length - 1 ? 0 : this.state.index.current + 1
        }
      }, () => this.updateRollAnimationState.call(this))
    }
  }

  prevImage() {
    if (this.state.images.length > 1) {
      this.setState({
        index: {
          current: this.state.index.current === 0 ? this.state.images.length - 1 : this.state.index.current - 1
        }
      }, () => this.updateRollAnimationState.call(this))
    }
  }

  onSwipeHandler(evt) {
    if (evt.deltaX < 0)
      this.nextImage();
    if (evt.deltaX > 0)
      this.prevImage();
  }

  onPressHandler(evt) {
    evt.preventDefault();
    this.displayContextMenu({ x: evt.srcEvent.clientX, y: evt.srcEvent.clientY });
  }

  onRightClickHandler(evt) {
    evt.preventDefault();
    this.displayContextMenu({ x: evt.clientX, y: evt.clientY });
  }

  displayContextMenu(coord) {
    this.setState({
      context_menu: {
        x: coord.x,
        y: coord.y,
        display: true
      }
    })
  }

  onTapHandler(evt) {
    console.log('Tap', evt);
  }

  closeContextMenu() {
    this.setState({ context_menu: { display: false } })
  }

  openInNewWindow() {
    window.open(this.getImageAbsoluteURL(this.state.images[this.state.index.current]));
    this.closeContextMenu();
  }

  getImageAbsoluteURL(path) {
    const img = document.createElement('img');
    img.src = path;
    return img.src;
  }

  downloadImage() {
    const link = document.createElement('a');
    link.href = this.getImageAbsoluteURL(this.state.images[this.state.index.current]);
    link.download = '';
    link.setAttribute('hidden', '');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    this.closeContextMenu();
  }

  doAndCloseContextMenu(action){
    action();
    this.closeContextMenu();
  }

  render() {
    return (
      <Hammer onSwipe={this.onSwipeHandler.bind(this)} onPress={this.onPressHandler.bind(this)} onContextMenu={this.onRightClickHandler.bind(this)} >
        <div className="ds-gallery" id="ds-gallery-wrapper">
          <ContextMenu
            actions={{
              'Next image': this.doAndCloseContextMenu.bind(this, this.nextImage.bind(this)),
              'Previous image': this.doAndCloseContextMenu.bind(this, this.prevImage.bind(this)),
              'Open in new window': this.openInNewWindow.bind(this),
              'Download': this.downloadImage.bind(this),
              'Cancel': this.closeContextMenu.bind(this)
            }}
            position={{ x: this.state.context_menu.x, y: this.state.context_menu.y }}
            display={this.state.context_menu.display ? 'flex' : 'none'}
          />
          <DsRoll
            gallery={this.state.gallery}
            images={this.state.images}
            animation={this.state.animation}
          />
          <DsControls
            actions={{
              next: this.nextImage.bind(this),
              prev: this.prevImage.bind(this),
              jumpTo: this.jumpToImage.bind(this)
            }}
            images={this.state.images}
            index={this.state.index.current}
          />
        </div>
      </Hammer >
    );
  }

}

export default DsGallery;