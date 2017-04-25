import React, { Component } from 'react';
import DsImage from './DsImage';

class DsRoll extends Component {

  createAnimationStyle(animation_name, x) {
    console.log(animation_name, x)
    let stylesheet = document.styleSheets[0];
    let keyframes =
      `
      @keyframes ${animation_name} {
        0% {transform: translate(unset)}
        100% {transform: translate(${x}px)}
      }
    `;
    stylesheet.insertRule(keyframes, stylesheet.cssRules.length);
  }


  render() {
    this.createAnimationStyle(this.props.animation.name, this.props.animation.x);
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