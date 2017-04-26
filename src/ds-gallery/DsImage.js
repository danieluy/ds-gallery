import React, { Component } from 'react';

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

export default DsImage;