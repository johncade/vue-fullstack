const express = require('express')
const app = express()
const port = process.env.PORT || 5555

// Initialize middleware
require('./middleware')(app)

// Load routes
app.use('/api', require('./api'))

// Serve the files on port 3000.
app.listen(port, function () {
  console.log('Example app listening on port 5555!\n')
})
