const React = require( 'react' )
const ReactDOMServer = require( 'react-dom/server' )
const express = require('express')
const api = express.Router()
const cors = require('cors')
import { JsonDB, Config } from 'node-json-db';
const db = new  JsonDB ( new  Config ( 'db' ,  true ,  true,  '/' ) ) ; 

import App from '../../admin/src/components/widgets/main'

api.use(cors())
api.use(express.json());
api.use(express.urlencoded({ extended: true }));

api.get('/widgets', (req, res) => {

    (async () => {
        try {
            const id = req.query.id
            const data = await db.getData(`/${id}`);
            const appHTML = ReactDOMServer.renderToStaticMarkup(
                <App data={data}/>
            )
            res.contentType( 'text/html' )
            res.status( 200 )
        
            return res.send( appHTML )
        } catch (error) {
          console.error(error)
        }
      })()
} )

api.use('/getWidgets', express.static(`${__dirname}/../getWidgets`, {index: 'index.js'}))

api.get('/getUserData', (req, res) => {

    (async () => {
        try {
            const id = req.query.id
            const data = await db.getData(`/${id}`);
            res.contentType( 'application/json' )
            res.status(200)
        
            return res.send( data )
        } catch (error) {
          console.error(error)
        }
      })()
})

api.post('/setUserData', (req, res) => {
    (async () => {
        try {
            const id = req.body.data.userID
            await db.push(`/${req.body.data.id}`, req.body.data);
            console.log(req.body.data)
            return res.status(200)
        } catch (error) {
          console.error(error)
        }
      })()
})

module.exports = api