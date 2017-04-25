import React, { Component } from 'react';

class DsImage extends Component {
  render() {
    // console.log(`${this.props.gallery.width} x ${this.props.gallery.height}`)
    var style = {
      width: this.props.gallery.width,
      height: this.props.gallery.height
    }
    return (
      <div className="ds-gallery-img" style={style}>
        <img src={this.props.url} alt=""/>
      </div>
    )
  }
}

export default DsImage;