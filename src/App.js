import React, { Component } from 'react';
import './App.css';

import DsGallery from './ds-gallery/DsGallery';

class App extends Component {
  test_gallery = [
    './img/placeholder_0.jpg',
    './img/placeholder_1.jpg',
    './img/placeholder_2.jpg',
    './img/placeholder_3.jpg',
    './img/placeholder_4.jpg'
  ]
  render() {
    return (
      <div className="App">
        <DsGallery
          images={this.test_gallery}
          options={{
            animation_duration_ms: 500
          }}
        />
      </div>
    );
  }
}

export default App;