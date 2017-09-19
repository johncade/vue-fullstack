const express = require('express')
const app = express()
const port = process.env.PORT || 8081

// Initialize middleware
require('./middleware')(app)

// Load routes
app.use('/api', require('./api'))

// Serve the files on port 3000.
app.listen(port, function () {
  console.log('App listening on port 8081!\n')
})
