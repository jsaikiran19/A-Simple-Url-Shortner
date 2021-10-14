const mongoose = require('mongoose')

// declare a Database string URI
const DB_URI = 'mongodb://localhost:27017/urlshortener'

mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection

connection.once('open', _ => {
    console.log('Database connected:')
  })

// export the connection object
module.exports = connection