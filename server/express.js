const express = require( 'express' );
const app = express()
const api = require('./routes/api')

app.use('/api', api)

app.listen( '9000', () => {
    console.log( 'Express server started at http://localhost:9000' );
} );