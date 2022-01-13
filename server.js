// here we are importing to the server.js for it to use
const express = require ('express')
const app = express()
const methodOverride = require('method-override')
const session = require('express-session')
const mongoose = require ('mongoose')

const Film = require('./models/films')

require('dotenv').config()
const PORT = process.env.PORT


//include method override package
//allows for use of PUT and DELETE requests on our forms

const mongoURI = process.env.MONGODB_URI
const db = mongoose.connection


// SESSIONS
// HTTP  is a stateless protocol
// This means that the protocol itself doesnt track
// whos making the request, or what requests they have made
// we need a way to give it stateful behavior
// we need it to  track what the user has already done
// we're going to do this using cookies and SESSIONS
// sends to the browser and the browser sends that back
/// we're going to use cookies, to identify particular users
/// in what call 'SESSIONS'
const SESSION_SECRET = process.env.SESSION_SECRET
console.log('Here is the SESSION_SECRET');
console.log(SESSION_SECRET);

// now we can set up our SESSION secret
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: false
}))
// this MIDDLEWARE attaches a cookie to our response
// which will then get saved by the user's browser
// the browser will then send it back in its requests
// the server will then be able to identify the user using cookies
// think of the cookies like a key or maybe an ID card

// when the server gets a request, it checks for cookies
// and if it finds one attaches a sessions object
/// to the request object
// we can use the session object to track information
//about the user


// CUSTOM MIDDLEWARE TO MAKE currentUser AVAILABLE AS A
/// LOCAL VARIABLE ON ALL ROUTES
app.use((req,res, next) => {
  res.locals.currentUser = req.session.currentUser
  next()
})





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

const userController = require('./controllers/userController')
app.use('/users', userController)


app.get('/', (req, res)=>{
  console.log('you are hitting the home route');
  res.render('home.ejs')
})



app.listen(PORT, () => {
  console.log(`Server is Running on ${PORT} for horror films`);
})
