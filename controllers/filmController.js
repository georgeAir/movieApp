const express = require ('express')

const router = express.Router()

// remember to import your models!!
// the path will be different from server.js
const Film =require('../models/films')


//custom MIDDLEWARE to require authentication on routes
            // THIS IS CREATING THE MUST BE LOGGED IN TO DO STUFF ///
            const authRequired = (req, res, next) => {
              if (req.session.currentUser) {
                // a user is signed in
                next()
                // next is part of Express
                // it does what is says
                // i.e go on to the next thing
              }else{
                // if there is no user
                // make this an alert -> // res.send('you must be logged in to do that.')
                res.redirect('/users/signin')
              }
            }


////////////////  Index ROUTE  ////////////////////
router.get('/', (req,res)=>{
  // console.log(req.session.currentUser);
  console.log('you are hitting the idex route');
  Film.find({}, (error, allFilms) => {
    console.log(allFilms);
  res.render('index.ejs', {
    films: allFilms,
    currentUser: req.session.currentUser
    })
  })
})


////////////////  New ROUTE  ////////////////////
router.get('/new', (req,res) => {
  console.log('you hit the new route');
  res.render('new.ejs')
})

/////////////  Show Route   ///////////
// setup show route -- get /films/:id -- info about Just ONE log

router.get('/:id', (req, res) => {
  Film.findById(req.params.id, (error, foundFilm) => {
    console.log(foundFilm)
    res.render('show.ejs', {films: foundFilm})
  })
})


/////////////   Create Route   ///////////
router.post('/', (req,res) => {
  console.log(req.body);
  console.log('you hit the create route');
  // res.send(req.body)
  Film.create(req.body, (error, createdFilm) => {
  if(error){
    console.log(error);
    res.send(error)
  }else{
    console.log(createdFilm);
    res.redirect('/home')
    }
  })
})


/////////////  DELETE Route  //////////////////
router.delete('/:id', authRequired,(req, res) => {
 Film.findByIdAndDelete(req.params.id,(err, deletedFiles) => {
   // findByIdAndDelete will delete a document with a given id
   if (err) {
     console.log(error)
     res.send(error)
   } else{
     // redirect to the index page if the delete is successful
     console.log(deletedFiles)
     res.redirect('/home')
   }
 })
})

/////////////  EDIT Route  //////////////////
router.get('/:id/edit', (req, res)=> {
  Film.findById(req.params.id, (error, foundFilm) => {
    if (error){
      console.log(error)
      res.send(error)
    }else{
      // make the edit form show the existing data
      console.log(foundFilm);
      res.render('edit.ejs', {
        films: foundFilm
      })
    }
  })
})

router.get('/:id/trailer', (req, res)=> {
  Film.findById(req.params.id, (error, foundFilm) => {
    if (error){
      console.log(error)
      res.send(error)
    }else{
      // make the edit form show the existing data
      console.log(foundFilm);
      res.render('trailer.ejs', {
        films: foundFilm
      })
    }
  })
})

/////////////  UPDATE Route  //////////////////
router.put('/:id', (req, res) => {
  // lets make our route UPDATE the model
  console.log(req.body);
  Film.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true // true to return the modified documement
    },
    (error, updatedFilm) => {
      // findByIdAndUpdate updates a film with a given id
      // the new option menas we want to update the film
      // without this flag, we will get the film as it was
      // before the update

      if (error){
        console.log(error)
        res.send(error)
      }else{
        console.log(updatedFilm)
        //redirect to the index route
        res.redirect('/home')
      }
    }
  )
})


module.exports = router
