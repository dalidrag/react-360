// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';

import data from './spreadsheetdata'

const spreadSheetSurface1 = new Surface(
    300, //
    600, // height
    Surface.SurfaceShape.Flat //
);
const spreadSheetSurface2 = new Surface(
    300, //
    600, // height
    Surface.SurfaceShape.Flat //
);
const spreadSheetSurface3 = new Surface(
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

  spreadSheetSurface1.setAngle(-0.6, 0);
  spreadSheetSurface2.setAngle(0, 0);
  spreadSheetSurface3.setAngle(0.6, 0);
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
      spreadSheetSurface1,
      'flat_spreadSheetSurface1' // optional, a name to reference the surface
  );
    r360.renderToSurface(
        r360.createRoot('react360visualization', {data: data}),
        spreadSheetSurface2,
        'flat_spreadSheetSurface2' // optional, a name to reference the surface
    );
    r360.renderToSurface(
        r360.createRoot('react360visualization', {data: data}),
        spreadSheetSurface3,
        'flat_spreadSheetSurface3' // optional, a name to reference the surface
    );

  // Load the initial environment
  r360.compositor.setBackground(r360.getAssetURL('OfficeBackground.jpg'));
}

window.React360 = {init};
