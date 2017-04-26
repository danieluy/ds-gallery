import React, { Component } from 'react';
import './DsGallery.css';
import Hammer from 'react-hammerjs';
import PropTypes from 'prop-types';

class DsImage extends Component {
  constructor(props) {
    super();
    this.state = {
      width: props.gallery.width,
      height: props.gallery.height
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.gallery.width !== this.state.width || nextProps.gallery.height !== this.state.height)
      this.setState({
        width: nextProps.gallery.width,
        height: nextProps.gallery.height
      })
  }
  render() {
    var style = {
      width: this.props.gallery.width,
      height: this.props.gallery.height
    }
    return (
      <div className="ds-gallery-img" style={style}>
        <img src={this.props.url} alt="" />
      </div>
    )
  }
}

class DsRoll extends Component {

  createAnimationStyle(animation_name, x_start, x_end) {
    if (x_start !== x_end) {
      let stylesheet = document.styleSheets[0];
      let keyframes =
        `
        @keyframes ${animation_name} {
          0% {transform: translate(${x_start}px)}
          100% {transform: translate(${x_end}px)}
        }
      `;
      stylesheet.insertRule(keyframes, stylesheet.cssRules.length);
    }
  }


  render() {
    this.createAnimationStyle(this.props.animation.name, this.props.animation.x_start, this.props.animation.x_end);
    const style = {
      width: `${this.props.gallery.roll_width}px`,
      animationName: this.props.animation.name,
      animationDuration: `${this.props.animation.duration}ms`,
      animationFillMode: 'forwards'
    }
    return (
      <div className="ds-gallery-roll" style={style}>
        {this.props.images.map((img, i) => <DsImage key={i} url={img} gallery={this.props.gallery} />)}
      </div>
    );
  }
}

class DsControls extends Component {
  constructor(props) {
    super();
    this.state = {
      index: props.index
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.index !== this.state.index)
      this.setState({
        index: nextProps.index
      });
  }
  getDots(images, jumpTo) {
    return images.map((img, i) => {
      return (
        <div
          key={i}
          onClick={jumpTo.bind(null, i)}
          className="ds-control-dot"
          style={{ transform: `scale(${i === this.state.index ? 1.5 : 1})` }}
        />
      )
    })
  }
  render() {
    return (
      <div className="ds-controls">
        {/*Arrow Back*/}
        <svg onClick={this.props.actions.prev} className="ds-control-arrow" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
        </svg>
        {/*Dots*/}
        <div className="ds-control-dots">
          {this.getDots(this.props.images, this.props.actions.jumpTo)}
        </div>
        {/*Arrow Forward*/}
        <svg onClick={this.props.actions.next} className="ds-control-arrow" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
        </svg>
      </div>
    );
  }
}

DsControls.propTypes = {
  actions: PropTypes.PropTypes.objectOf(PropTypes.func),
  images: PropTypes.array,
  index: PropTypes.number
};

class DsGallery extends Component {

  constructor(props) {
    super();
    this.state = {
      index: {
        prev: props.images.length - 1,
        current: 0,
        next: props.images.length > 1 ? 1 : 0
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
      }
    }
    window.addEventListener('resize', this.setGalleryState.bind(this));
  }

  componentDidMount() {
    this.setGalleryState();
  }

  updateRollAnimationState(x) {
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
      }, () => this.updateRollAnimationState.call(this))
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
      }, () => this.updateRollAnimationState.call(this))
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

  swipeHandler(evt) {
    if (evt.deltaX < 0)
      this.nextImage();
    if (evt.deltaX > 0)
      this.prevImage();
  }

  render() {
    return (
      <Hammer onSwipe={this.swipeHandler.bind(this)}>
        <div className="ds-gallery" id="ds-gallery-wrapper">
          <DsRoll gallery={this.state.gallery} images={this.state.images} animation={this.state.animation} />
          {/*<button onClick={this.nextImage.bind(this)} style={{ position: 'fixed', top: 0, right: 0 }}>Next</button>
          <button onClick={this.prevImage.bind(this)} style={{ position: 'fixed', top: 0, left: 0 }}>Prev</button>*/}
          <DsControls
            actions={{
              next: this.nextImage.bind(this),
              prev: this.prevImage.bind(this),
              jumpTo: () => console.log('Jump!')
            }}
            images={this.state.images}
            index={this.state.index.current
            }
          />
        </div>
      </Hammer >
    );
  }

}

export default DsGallery;