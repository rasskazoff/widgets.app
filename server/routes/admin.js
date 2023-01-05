const express = require('express')
const admin = express.Router()

admin.use('/', express.static(`${__dirname}/../../admin/dist`, {index: 'index.html'}))

module.exports = admin