import "https://cdn.jsdelivr.net/npm/uevent@2/browser.js";
import "https://cdn.jsdelivr.net/npm/three/build/three.min.js";
import "https://cdn.jsdelivr.net/npm/photo-sphere-viewer@4/dist/photo-sphere-viewer.js";
import "https://cdn.jsdelivr.net/npm/photo-sphere-viewer@4/dist/plugins/compass.js";

new PhotoSphereViewer.Viewer({
  panorama: '/360/img/panorama/AmongUs.jpg',
  container: 'photosphere',
  caption: 'Among Us',
  loadingImg: '/360/img/photosphere-logo.gif',
  loadingTxt: 'Loading!',
  defaultLat: 0,
  defaultLong: 1,
  autorotateLat: 0,
  lang: {
    autorotate: 'Automatic rotation',
    zoom      : 'Zoom',
    zoomOut   : 'Zoom out',
    zoomIn    : 'Zoom in',
    move      : 'Move',
    download  : 'Download',
    fullscreen: 'Fullscreen',
    menu      : 'Menu',
    twoFingers: 'Use two fingers to navigate',
    ctrlZoom  : 'Use ctrl + scroll to zoom the image',
    loadError : 'The panorama can\'t be loaded',
},
  plugins: [
    [PhotoSphereViewer.CompassPlugin, {
      hotspots: [
        { longitude: '0deg' },
        { longitude: '90deg' },
        { longitude: '180deg' },
        { longitude: '270deg' },
      ],
    }],
  ],
});

