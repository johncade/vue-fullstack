var sql = require('mssql')

//Use a read only account for queries
var sqlConfig = {
  user: process.env.SQL_USER,
  password: process.env.SQL_PW,
  server: process.env.SQL_SERVER,
  database: process.env.SQL_DB,
  requestTimeout: 50000,
  connectionTimeout: 50000,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 100000,
  },
}

var connection = sql.connect(sqlConfig, function (err) {
  if (err)
    throw err
})

module.exports = connection