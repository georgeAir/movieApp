// here we are importing to the server.js for it to use
const express = require ('express')
const app = express()
const methodOverride = require('method-override')
const session = require('express-session')
const mongoose = require ('mongoose')

const Port = 3000
const Film = require('./models/films.js')


//include method override package
//allows for use of PUT and DELETE requests on our forms

const mongoURI = 'mongodb://127.0.0.1:27017/home'
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
app.use(express.json())   //// allows us to get our data back as JSON

app.use(express.static('public')) //tells express to try to match requests with files in the directory called 'public'

app.use(express.urlencoded({ extended: true }))  //// allow us to get our data in request
// need to tell the app to use method override
// we will be adding a query parameter to our delete from named _method
app.use(methodOverride('_method'))



////////////////  HOME ROUTE  ////////////////////
app.get('/', (req, res) => {

  const today = new Date()

  res.send(`
  <h1> HELLO! Welcome to a one stop shop of the best Horror films! </h1>
  <h2>  </h2>
  <p> ${today}</p>`)
})


////////////////  Index ROUTE  ////////////////////
app.get('/home', (req, res)=>{
  console.log('you are hitting the idex route');
  Film.find({}, (error, allFilms) => {
  res.render('index.ejs', {
    films: allFilms
    })
  })
})

////////////////  New ROUTE  ////////////////////
app.get('/home/new', (req,res) => {
  console.log('you hit the new route');
  res.render('new.ejs')
})

/////////////  Show Route   ///////////
// setup show route -- get /logs/:id -- info about Just ONE log

app.get('/home/:id', (req, res) => {
  Film.findById(req.params.id, (error, foundFilm) => {
    console.log(foundFilm)
    res.render('show.ejs', {films: foundFilm})
  })
})




app.listen(3000, () => {
  console.log('Server is a scary 3000!!');
})
