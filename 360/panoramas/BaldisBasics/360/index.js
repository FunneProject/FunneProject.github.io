import "https://cdn.jsdelivr.net/npm/uevent@2/browser.js";
import "https://cdn.jsdelivr.net/npm/three/build/three.min.js";
import "https://cdn.jsdelivr.net/npm/photo-sphere-viewer@4/dist/photo-sphere-viewer.js";
import "https://cdn.jsdelivr.net/npm/photo-sphere-viewer@4/dist/plugins/compass.js";

new PhotoSphereViewer.Viewer({
  panorama: 'https://funneproject.github.io/360/img/panorama/BaldisBasics.jpg',
  container: 'photosphere',
  caption: "Baldi's Basics",
  loadingImg: '/360/img/photosphere-logo.gif',
  loadingTxt: 'Loading!',
  defaultLat: 0.1,
  defaultLong: 100.45,
  autorotateLat: -1,
  defaultZoomLvl: 60,
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
        { longitude: '356deg' },
      ],
    }],
  ],
});
