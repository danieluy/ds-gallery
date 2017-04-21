import React, { Component } from 'react';
import './DsGallery.css';
import Hammer from 'react-hammerjs';

class DsGalleryImage extends Component {
  render() {
    // console.log(this.props.deltaX);
    const style = {
      backgroundImage: `url('${this.props.url}')`,
      animationName: this.props.animation.name,
      animationDuration: `${this.props.animation.duration}ms`,
      animationTimingFunction: 'ease-in-out',
      animationFillMode: 'forwards',
      transform: `translateX(${this.props.deltaX}px)`
    }
    return (
      <div className="ds-gallery-img" style={style} />
    )
  }
}

class DsGallery extends Component {

  animation_duration = 300;

  constructor(props) {
    super();
    this.state = {
      current_index: 0,
      images: props.images,
      animation: null,
      deltaX: 0,
      gallery: {
        state: null,
        width: 0,
        height: 0
      }
    }
    if (props.options)
      this.animation_duration = props.options.animation_duration_ms || 300;
    window.addEventListener('resize', this.setGalleryState.bind(this));
  }

  componentDidMount() {
    this.setGalleryState();
  }

  setGalleryState() {
    if (this.state.gallery.self)
      this.setState({
        gallery: {
          width: this.state.gallery.width,
          height: this.state.gallery.height
        }
      })
    else {
      let gallery = document.getElementById('ds-gallery-wrapper'); // TODO findout how do I do this with React
      this.setState({
        gallery: {
          self: gallery,
          width: gallery.offsetWidth,
          height: gallery.offsetHeight
        }
      })
    }
  }

  nextImage() {
    this.setState({
      animation: 'swipeLeft'
    })
    setTimeout(() => {
      this.setState({
        animation: 'swipeFromLeft',
        current_index: this.state.current_index < this.state.images.length - 1 ? this.state.current_index + 1 : 0,
        deltaX: 0
      })
    }, this.animation_duration);
    setTimeout(() => {
      this.setState({
        animation: '',
        current_index: this.state.current_index,
        deltaX: 0
      })
    }, this.animation_duration + 10);
  }

  prevImage() {
    this.setState({
      animation: 'swipeRight'
    })
    setTimeout(() => {
      this.setState({
        animation: 'swipeFromRight',
        current_index: this.state.current_index > 0 ? this.state.current_index - 1 : this.state.images.length - 1,
        deltaX: 0
      })
    }, this.animation_duration);
    setTimeout(() => {
      this.setState({
        animation: '',
        current_index: this.state.current_index,
        deltaX: 0
      })
    }, this.animation_duration+10);
  }

  handleSwipe(evt) {
    if (evt.deltaX < 0)
      this.nextImage();
    if (evt.deltaX > 0)
      this.prevImage();
  }

  handlePan(evt) {
    this.setState({
      deltaX: evt.deltaX
    })
  }

  render() {
    const image = this.state.images[this.state.current_index];
    console.log(this.state.gallery.height);
    return (
      <div className="ds-gallery" id="ds-gallery-wrapper">
        <Hammer
          onSwipe={this.handleSwipe.bind(this)}
          onPan={this.handlePan.bind(this)}
        >
          <DsGalleryImage url={image} deltaX={this.state.deltaX} animation={{ name: this.state.animation, duration: this.animation_duration }} />
          {/*<button onClick={this.nextImage.bind(this)} style={{ position: 'fixed', top: 0, right: 0 }}>Next</button>
          <button onClick={this.prevImage.bind(this)} style={{ position: 'fixed', top: 0, left: 0 }}>Prev</button>*/}
        </Hammer>
      </div>
    );
  }

}

export default DsGallery;