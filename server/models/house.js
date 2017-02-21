const mongoose = require('mongoose')
const Schema = mongoose.Schema

var houseSchema = new Schema({
  title: String,
  price: Number,
  address: String,
  description: String,
  photo: String,
  lat: Number,
  lon: Number,
  sold: Boolean
},{
  timestamps: true
});

var House = mongoose.model('Houses',houseSchema)

module.exports = House
