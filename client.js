// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

let data = {
    rows: [
        ['Customer', 'Job', 'Contact', 'City', 'Revenue'],
        ['iDiscovery', 'Build', 'John Doe', 'Boston, MA', '500,000'],
        ['SxSW', 'Build', 'Tom Fuller', 'San Francisco, CA', '600,000'],
        ['CapitalTwo', 'Failed', 'Eric Pixel', 'Seattle, WA', '450,000']
    ]
};

import {ReactInstance, Surface} from 'react-360-web';

const myFlatSurface = new Surface(
    300, //
    600, // height
    Surface.SurfaceShape.Flat //
);

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  myFlatSurface.setAngle(-0.6, 0);
  // Render your app content to the default cylinder surface
  const s = r360.getDefaultSurface();
  s.resize(0, 0);

  r360.renderToSurface(
      r360.createRoot('react360visualization'),
      s,
      'default' // optional, a name to reference the surface
  );



  r360.renderToSurface(
      r360.createRoot('react360visualization', {data: data}),
      myFlatSurface,
      'flat_1' // optional, a name to reference the surface
  );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('360_world.jpg'));
}

window.React360 = {init};
