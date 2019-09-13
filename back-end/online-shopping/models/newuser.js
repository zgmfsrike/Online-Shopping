var mysql = require("mysql");
require(`dotenv`).config();

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Skill = new Schema({
  userid: String,
  language: String,
  level: Number,
  created_at: Date,
  updated_at: Date
})

module.exports = mongoose.model('skills', Skill)
