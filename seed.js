const Film = require('./models/films')

const mongoose = require ('mongoose')

// connect to the DATABASE

/// for heroku
const mongoURI = 'mongodb+srv://georgeair:Junior0880@cluster0.0c4th.mongodb.net/home?retryWrites=true&w=majority'

///for local
// const mongoURI ='mongodb://127.0.0.1:27017/home'



const db = mongoose.connection

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => {
  console.log('DATABASE connected')
})

Film.create(
  [
      {
        name: "The Platform",
        synopsis: "In the future, prisoners housed in vertical cells watch as inmates in the upper cells are fed while those below starve.",
        personalReview: "If you like gory thrillers then this is a good movie for you. You follow the protagonist as he tries to find an escape to a prison where the food scarcity increases the deeper the prison goes.",
        img: "https://m.media-amazon.com/images/M/MV5BNzAxYmQzYmYtYjEzYS00ZTFkLWE3NjUtODhjOTQzM2U5ZWI1XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
        durationOfFilm: "1h 34m",
        streamableOn:"Netlfix",
        trailer:"https://www.youtube.com/embed/RlfooqeZcdY"
      },{
        name: "Hush",
        synopsis: "A deaf writer who retreated into the woods to live a solitary life must fight for her life in silence when a masked killer appears in her window.",
        personalReview: "This film will definately have your anxiety going. Running and hiding for your life has to be one of the scariest things a person will ever endure, but can you imagine how that must be when you are deaf? Well Maddie, the protagonist in this film doesn't have to.",
        img: "https://picfiles.alphacoders.com/355/355480.jpg",
        durationOfFilm: "1h 27m",
        streamableOn: "Netlfix",
        trailer:"https://www.youtube.com/embed/Q_P8WCbhC6s"
      },{
        name: "Resident Evil: Welcome to Raccoon City",
        synopsis: "Welcome to Raccoon City, once the booming home of pharmaceutical giant Umbrella Corp. The company's exodus left the city a wasteland, a dying town with great evil brewing below the surface. When that evil is unleashed, a group of survivors must work together to uncover the truth behind Umbrella and make it through the night.",
        personalReview:"If you like the orignal games of Resident Evil then you will like this one. In my opinion it is one of the better Resident Evil movies from the whole franchise. You will see all the major landmarks and charecters from the original game along with all the jump scares.",
        img: "https://m.media-amazon.com/images/M/MV5BOTU5NjVkN2YtNmFjZS00MzhjLWI0MGMtZjE3ZmE1OTc0ZjczXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        durationOfFilm: "1h 47m",
        streamableOn: "YouTube, Apple TV, Amazon Prime",
        trailer:"https://www.youtube.com/embed/4q6UGCyHZCI"
      },{
        name: "Jeepers Creepers",
        synopsis: "After making a horrific discovery in the basement of an old abandoned church, Trish (Gina Philips) and her brother Darry (Justin Long) watch their routine road trip home from college turn into a heart-stopping race for their lives. They find themselves the chosen prey of an indestructible force that relentlessly pursues them.",
        personalReview:"",
        img: "https://i.ebayimg.com/images/g/ZdgAAMXQiM5Q9tP~/s-l500.jpg",
        durationOfFilm: "1h 30m",
        streamableOn: "Amazon Prime",
        trailer:"https://www.youtube.com/embed/akFUWf5xe6k"
      },{
        name: "The Nun",
        synopsis: "When a young nun at a cloistered abbey in Romania takes her own life, a priest with a haunted past and a novitiate on the threshold of her final vows are sent by the Vatican to investigate. Together, they uncover the order's unholy secret. Risking not only their lives but their faith and their very souls, they confront a malevolent force in the form of a demonic nun.",
        personalReview:"If you like the orignal games of Resident Evil then you will like this one. In my opinion it is one of the better Resident Evil movies from the whole franchise. You will see all the major landmarks and charecters from the original game along with all the jump scares.",
        img: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRmqcNSxlXd3RjXsnWu1dw_NjtdFrpKHsSsxl4y7EX_cbN7oeAz",
        durationOfFilm: "1h 36m",
        streamableOn: "HBO Max",
        trailer:"https://www.youtube.com/embed/pzD9zGcUNrw"
      },{
        name: "The Haunting in Connecticut",
        synopsis: "When their son Matt (Kyle Gallner) receives a diagnosis of cancer, Sara (Virginia Madsen) and Peter (Martin Donovan) Campbell move to Connecticut to be closer to his doctors. At first all is well, but then Matt becomes increasingly disturbed by what appears to be paranormal activity. Sara turns to a priest for help, and the ghosts are seemingly banished -- but Matt's condition takes a sudden and unexplained turn for the worse, and the lives of Sara and the rest of her family are endangered.",
        personalReview:"If you like the orignal games of Resident Evil then you will like this one. In my opinion it is one of the better Resident Evil movies from the whole franchise. You will see all the major landmarks and charecters from the original game along with all the jump scares.",
        img: "https://flxt.tmsimg.com/assets/p190884_p_v13_ah.jpg",
        durationOfFilm: "1h 42m",
        streamableOn: "Hulu, HBO Max",
        trailer:"https://www.youtube.com/embed/MRJA3lN0xCQ"
      },{
        name: "Poltergeist",
        synopsis: "Strange and creepy happenings beset an average California family, the Freelings -- Steve (Craig T. Nelson), Diane (JoBeth Williams), teenaged Dana (Dominique Dunne), eight-year-old Robbie (Oliver Robins), and five-year-old Carol Ann (Heather O'Rourke) -- when ghosts commune with them through the television set. Initially friendly and playful, the spirits turn unexpectedly menacing, and, when Carol Ann goes missing, Steve and Diane turn to a parapsychologist and eventually an exorcist for help.",
        personalReview:"If you like the orignal games of Resident Evil then you will like this one. In my opinion it is one of the better Resident Evil movies from the whole franchise. You will see all the major landmarks and charecters from the original game along with all the jump scares.",
        img: "https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/poltergeist-pi.jpg?itok=4Wn54wHx",
        durationOfFilm: "2 hours",
        streamableOn: "Tubi, Amazon Prime",
        trailer:"https://www.youtube.com/embed/9eZgEKjYJqA"
      },{
        name: "Insidous",
        synopsis: "Parents (Patrick Wilson, Rose Byrne) take drastic measures when it seems their new home is haunted and their comatose son (Ty Simpkins) is possessed by a malevolent entity.",
        personalReview:"If you like the orignal games of Resident Evil then you will like this one. In my opinion it is one of the better Resident Evil movies from the whole franchise. You will see all the major landmarks and charecters from the original game along with all the jump scares.",
        img: "https://flxt.tmsimg.com/assets/p8494407_p_v10_ak.jpg",
        durationOfFilm: "1h 43m",
        streamableOn: "Hulu",
        trailer:"https://www.youtube.com/embed/zuZnRUcoWos"
      },{
        name: "Ready or Not",
        synopsis: "Grace couldn't be happier after she marries the man of her dreams at his family's luxurious estate. There's just one catch -- she must now hide from midnight until dawn while her new in-laws hunt her down with guns, crossbows and other weapons. As Grace desperately tries to survive the night, she soon finds a way to turn the tables on her not-so-lovable relatives.",
        personalReview:"If you like the orignal games of Resident Evil then you will like this one. In my opinion it is one of the better Resident Evil movies from the whole franchise. You will see all the major landmarks and charecters from the original game along with all the jump scares.",
        img: "https://d2e111jq13me73.cloudfront.net/sites/default/files/styles/product_image_aspect_switcher_170w/public/product-images/csm-movie/ready-or-not-movie-poster-image0.jpg?itok=xlaUipvy",
        durationOfFilm: "1h 35m",
        streamableOn: "Apple TV, Amazon Prime",
        trailer:"https://www.youtube.com/embed/ZtYTwUxhAoI"
      },{
        name: "A Quiet Place",
        synopsis: "If they hear you, they hunt you. A family must live in silence to avoid mysterious creatures that hunt by sound. Knowing that even the slightest whisper or footstep can bring death, Evelyn and Lee are determined to find a way to protect their children while desperately searching for a way to fight back.",
        personalReview:"If you like the orignal games of Resident Evil then you will like this one. In my opinion it is one of the better Resident Evil movies from the whole franchise. You will see all the major landmarks and charecters from the original game along with all the jump scares.",
        img: "https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_.jpg",
        durationOfFilm: "1h 30m",
        streamableOn: "YouTube, Apple TV, Amazon Prime",
        trailer:"https://www.youtube.com/embed/WR7cc5t7tv8"
      }
    ]
    , (err, data)=>{
      if (err){
        console.log(err);
      }else{
    console.log(data);
    db.close()
  }
})



    // to close the DATABASE
// db.close()
