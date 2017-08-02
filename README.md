# ds-gallery
React component to display static images

```javascript
// Import the library
import DsGallery from 'ds-gallery';
// Insert the gallery
<DsGallery
  images={arrayOfImageURLs}
  options={{
    open_new_window: true,
    download: true,
    animation_duration_ms: null,
    width: null,
    height: null
  }}
/>
```

## Changelog
* v0.3.1
  * Optimized build for production
* v0.3.0
  * Implemented Webpack bundling process
* v0.2.4
  * Fixes a mayor bug that prevented the gallery from working
* v0.2.3
  * New functionalities and bug fixes
* v0.2.2
  * First working version