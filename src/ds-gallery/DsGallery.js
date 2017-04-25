import React, { Component } from 'react';
import './DsGallery.css';
import Hammer from 'react-hammerjs';
import DsRoll from './DsRoll';

class DsGallery extends Component {

  constructor(props) {
    super();
    this.state = {
      index: {
        prev: 0,
        current: 0,
        next: 0,
      },
      images: props.images,
      animation: {
        name: 'initial_0',
        duration: props.options ? props.options.animation_duration_ms || 300 : 300,
        x: 0
      },
      deltaX: 0,
      gallery: {
        self: null,
        width: 0,
        height: 0,
        roll_width: 10000
      }
    }
    window.addEventListener('resize', this.setGalleryState.bind(this));
  }

  componentDidMount() {
    this.setGalleryState();
    this.setInitialIndexState();
    // TODO delete following test
    setTimeout(() => {
      this.updateRollAnimationState(this.state.gallery.width * -1)
    }, 2000);
  }

  updateRollAnimationState(x) {
    let name = this.state.animation.name.split('_');
    this.setState({
      animation: {
        name: `${name[0]}_${parseInt(name[1], 10) + 1}`,
        duration: 300,
        x: x
      }
    })
  }

  setInitialIndexState() {
    this.setState({
      index: {
        prev: this.props.images.length - 1,
        current: 0,
        next: this.props.images.length > 1 ? 1 : 0
      }
    })
  }

  setIndexNext() {
    if (this.state.images.length > 1) {
      let next = this.state.index.current + 2;
      if (this.state.index.current === this.state.images.length - 2)
        next = 0;
      if (this.state.index.current === this.state.images.length - 1)
        next = 1;
      this.setState({
        index: {
          prev: this.state.index.current,
          current: this.state.index.current === this.state.images.length - 1 ? 0 : this.state.index.current + 1,
          next: next
        }
      })
    }
  }

  setIndexPrev() {
    if (this.state.images.length > 1) {
      let prev = this.state.index.current - 2;
      if (this.state.index.current === 1)
        prev = this.state.images.length - 1;
      if (this.state.index.current === 0)
        prev = this.state.images.length - 2;
      this.setState({
        index: {
          prev: prev,
          current: this.state.index.current === 0 ? this.state.images.length - 1 : this.state.index.current - 1,
          next: this.state.index.current
        }
      })
    }
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

  nextImage() {
    this.setIndexNext();
  }

  prevImage() {
    this.setIndexPrev();
  }

  onSwipe(evt) {
    if (evt.deltaX < 0)
      this.nextImage();
    if (evt.deltaX > 0)
      this.prevImage();
  }

  onPan(evt) {
    this.setState({
      deltaX: evt.deltaX
    })
  }

  render() {
    return (
      <Hammer onSwipe={this.onSwipe.bind(this)} onPan={this.onPan.bind(this)}>
        <div className="ds-gallery" id="ds-gallery-wrapper">
          <DsRoll gallery={this.state.gallery} images={this.state.images} animation={this.state.animation} />
          <button onClick={this.nextImage.bind(this)} style={{ position: 'fixed', top: 0, right: 0 }}>Next</button>
          <button onClick={this.prevImage.bind(this)} style={{ position: 'fixed', top: 0, left: 0 }}>Prev</button>
        </div>
      </Hammer >
    );
  }

}

export default DsGallery;