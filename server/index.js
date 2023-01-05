const path = require( 'path' );

// ignore `style` imports
require( 'ignore-styles' );

// transpile imports on the fly
require( '@babel/register')( {
    configFile: path.resolve( __dirname, '../babel.config.js' ),
} );

// import express server
require( './express.js' );