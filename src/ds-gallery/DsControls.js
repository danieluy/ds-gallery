import React, { Component } from 'react';
import PropTypes from 'prop-types';

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

export default DsControls;