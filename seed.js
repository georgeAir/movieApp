const Film = require('./models/films')

const mongoose = require ('mongoose')

// connect to the DATABASE
const mongoURI = 'mongodb://127.0.0.1:27017/home'

const db = mongoose.connection

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => {
  console.log('DATABASE connected');
})

Film.create(
  [
      {
        name: 'The Platform',
        synopsis: 'In the future, prisoners housed in vertical cells watch as inmates in the upper cells are fed while those below starve.',
        personalReview: 'If you like gory thrillers then this is a good movie for you. You follow the protagonist as he tries to find an escape to a prison where the food scarcity increases the deeper the prison goes.',
        img: 'https://m.media-amazon.com/images/M/MV5BNzAxYmQzYmYtYjEzYS00ZTFkLWE3NjUtODhjOTQzM2U5ZWI1XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg',
        durationOfFilm: '1h 34m',
        streamableOn:'Netlfix',
        trailer:'https://youtu.be/RlfooqeZcdY'
      }, {
        name: 'Hush',
        synopsis: 'A deaf writer who retreated into the woods to live a solitary life must fight for her life in silence when a masked killer appears in her window.',
        personalReview: `This film will definately have your anxiety going. Running and hiding for your life has to be one of the scariest things a person will ever endure, but can you imagine how that must be when you are deaf? Well Maddie, the protagonist in this film doesn't have to.`,
        img: 'https://picfiles.alphacoders.com/355/355480.jpg',
        durationOfFilm: '1h 27m',
        streamableOn: 'Netlfix',
        trailer:'https://youtu.be/Q_P8WCbhC6s'
      }, {
        name: 'Resident Evil: Welcome to Raccoon City',
        synopsis: `Welcome to Raccoon City, once the booming home of pharmaceutical giant Umbrella Corp. The company's exodus left the city a wasteland, a dying town with great evil brewing below the surface. When that evil is unleashed, a group of survivors must work together to uncover the truth behind Umbrella and make it through the night.`,
        personalReview:`If you like the orignal games of Resident Evil then you will like this one. In my opinion it is one of the better Resident Evil movies from the whole franchise. You will see all the major landmarks and charecters from the original game along with all the jump scares.`,
        img: 'https://m.media-amazon.com/images/M/MV5BOTU5NjVkN2YtNmFjZS00MzhjLWI0MGMtZjE3ZmE1OTc0ZjczXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
        durationOfFilm: '1h 47m',
        streamableOn: 'YouTube, Apple TV, Amazon Prime',
        trailer:'https://youtu.be/4q6UGCyHZCI'
      }
    ]
    , (err, data)=>{
    console.log(data);
    db.close()
})



    // close the DATABASE
// db.close()
