import React, { Component } from 'react';
import './App.css';

import DsGallery from './ds-gallery/DsGallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <DsGallery
          images={[
            './img/placeholder_1.jpg',
            './img/placeholder_2.jpg',
            './img/placeholder_3.jpg'
          ]}
          options={{
            animation_duration_ms: 300
          }}
        />
      </div>
    );
  }
}

export default App;
