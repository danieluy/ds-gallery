import React, { Component } from 'react';
import './DsGallery.css';
import Hammer from 'react-hammerjs';

class DsGalleryImage extends Component {
  render() {
    const style = {
      backgroundImage: `url('${this.props.url}')`,
      animationName: this.props.animation.name,
      animationDuration: `${this.props.animation.duration}ms`,
      animationTimingFunction: 'ease-in-out',
      animationFillMode: 'forwards',
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
      animation: null
    }
    if (props.options)
      this.animation_duration = props.options.animation_duration_ms || 300;
  }

  nextImage() {
    this.setState({
      animation: 'swipeLeft'
    })
    setTimeout(() => {
      this.setState({
        animation: 'swipeFromLeft',
        current_index: this.state.current_index < this.state.images.length - 1 ? this.state.current_index + 1 : 0
      })
    }, this.animation_duration);
  }

  prevImage() {
    this.setState({
      animation: 'swipeRight'
    })
    setTimeout(() => {
      this.setState({
        animation: 'swipeFromRight',
        current_index: this.state.current_index > 0 ? this.state.current_index - 1 : this.state.images.length - 1
      })
    }, this.animation_duration);
  }

  handleSwipe(evt) {
    // left
    if (evt.deltaX < 0)
      this.nextImage();
    // right
    if (evt.deltaX > 0)
      this.prevImage();
  }

  render() {
    const image = this.state.images[this.state.current_index];
    return (
      <Hammer onSwipe={this.handleSwipe.bind(this)}>
        <div className="ds-gallery" onKeyPress={this.handleKeyPress}>
          <DsGalleryImage url={image} animation={{ name: this.state.animation, duration: this.animation_duration }} />
          {/*<button onClick={this.nextImage.bind(this)} style={{ position: 'fixed', top: 0, right: 0 }}>Next</button>
          <button onClick={this.prevImage.bind(this)} style={{ position: 'fixed', top: 0, left: 0 }}>Prev</button>*/}
        </div>
      </Hammer>
    );
  }

}

export default DsGallery;