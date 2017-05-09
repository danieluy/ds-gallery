import React, { Component } from 'react';
import DsImage from './DsImage';

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
      if (stylesheet.cssRules)
        stylesheet.insertRule(keyframes, stylesheet.cssRules.length);
      else
        stylesheet.insertRule(keyframes, 0);
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

export default DsRoll;