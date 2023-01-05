const express = require( 'express' );
const app = express()
const api = require('./routes/api')
const admin = require('./routes/admin')

app.use('/api', api)
app.use('/admin', admin)

app.listen( '5000', () => {
    console.log( 'Express server started at http://localhost:5000' );
} );