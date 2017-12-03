const mongoose = require('../config/database')
const { Schema } = mongoose

const projectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: true, 'default': false },
  siteurl: { type: String, required: true, 'default': false },
  devlogos: { type: String, required: true, 'default': false },
  createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('projects', projectSchema)
