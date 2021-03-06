import React, { Component } from 'react';

// const DsGallery = require('../npm-dist/DsGallery').default;
import DsGallery from '../npm-dist/DsGallery';

class App extends Component {
  test_images_array = [
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
          images={this.test_images_array}
          options={{
            open_new_window: true,
            download: true,
            animation_duration_ms: 500,
            width: null,
            height: null
          }}
        />
      </div>
    );
  }
}

export default App;