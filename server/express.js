const express = require( 'express' );
const app = express()
const api = require('./routes/api')

app.use('/api', api)

app.listen( '5000', () => {
    console.log( 'Express server started at http://localhost:5000' );
} );