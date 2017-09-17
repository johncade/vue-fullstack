'use strict'
const express = require('express')
const router = express.Router()

router.route('/test')
  .get((req, res) => {
    res.send('Server works!')
  })

module.exports = router
