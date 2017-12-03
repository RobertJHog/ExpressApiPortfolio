const mongoose = require('../config/database')
const { Schema } = mongoose

const jobSchema = new Schema({
  company: { type: String, required: true },
  description1: { type: String, required: true },
  description1: { type: String, required: true },
  duration: { type: String, required: true, 'default': false },
  jobtitle: { type: String, required: true, 'default': false },
  devjob: { type: Boolean, required: true, 'default': false },
})

module.exports = mongoose.model('jobs', jobSchema)
