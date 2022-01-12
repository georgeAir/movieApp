// here we are importing to the server.js for it to use
const express = require ('express')
const app = express()
const methodOverride = require('method-override')
const session = require('express-session')
const mongoose = require ('mongoose')

const Film = require('./models/films')

require('dotenv').config()

//include method override package
//allows for use of PUT and DELETE requests on our forms

const mongoURI = process.env.MONGODB_URI
const db = mongoose.connection

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => {
  console.log('DATABASE connected');
})

db.on('error', (err) => {console.log('error: ', err)})
db.on('connected', () => {console.log('mongo connected ' )})
db.on('disconnected', () => {console.log('mongo disconnected ' )})

////////////////  MIDDLEWARE  ////////////////////
//// allows us to get our data back as JSON
app.use(express.json())

//tells express to try to match requests with files in the directory called 'public'
app.use(express.static('public'))

//// allow us to get our data in request
app.use(express.urlencoded({ extended: true }))

// need to tell the app to use method override
// we will be adding a query parameter to our delete from named _method
app.use(methodOverride('_method'))

// CONTROLLERS //

// import your controllers
const filmController = require('./controllers/filmController')
// use them with APP.USE
app.use('/home', filmController)
// here we are telling APP
// when you see the URL that starts with /example
// use this router



app.listen(3000, () => {
  console.log(`Server is Running on ${PORT} for horror films`);
})
