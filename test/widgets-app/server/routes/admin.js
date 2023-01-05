const express = require('express')
const admin = express.Router()
const { createProxyMiddleware } = require('http-proxy-middleware');

const  options  =  { 
    target : 'http://localhost:5173',
    changeOrigin : true
}
admin.get('/', createProxyMiddleware( options ))

module.exports = admin