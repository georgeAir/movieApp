const mongoose = require('mongoose')

const {Schema, model} = mongoose


const filmsSchema = new Schema({
  name: {type: String, required: true},
  synopsis: String,
  personalReview: String,
  img: String,
  durationOfFilm: String,
  streamableOn: String,
  trailer: String
},{timestamps:true })

/// call 'model()'
// will initialize the collection
// collection name

const Film = model('Film', filmsSchema)

module.exports = Film
