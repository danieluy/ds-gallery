import React, { Component } from 'react';

import DsGallery from './ds-gallery/DsGallery';

class App extends Component {
  test_gallery = [
    'http://placeimg.com/640/480/people',
    'http://placeimg.com/800/600/people',
    'http://placeimg.com/1024/768/people',
    'http://placeimg.com/1080/1920/people',
    'http://placeimg.com/1280/900/people',
    'http://placeimg.com/1920/1080/people',
    'img/placeholder_0.jpg',
    'placeholder_4.jpg'
  ]
  styles = {
    width: '100%',
    height: '95vh',
    border: '1px solid #aaaaaa'
  }
  render() {
    return (
      <div className="App" style={this.styles}>
        <DsGallery
          images={this.test_gallery}
          options={{
            tap_to_open: true,
            animation_duration_ms: 500
          }}
        />
      </div>
    );
  }
}

export default App;