const router = require('express').Router()
const { Job } = require('../models')

router.get('/jobs', (req, res, next) => {
  Job.find()
    // Newest recipes first
    .sort({ createdAt: -1 })
    // Send the data in JSON format
    .then((jobs) => res.json(jobs))
    // Forward any errors to error handler
    .catch((error) => next(error))
    })
    .get('/jobs/:id', (req, res, next) => {
      const id = req.params.id
      Job.findById(id)
        .then((job) => {
          if (!job) { return next() }
          res.json(job)
        })
        .catch((error) => next(error))
    })
    .post('/jobs',  (req, res, next) => {
      let newJob = req.body
      Job.create(newJob)
        .then((job) => res.json(job))
        .catch((error) => next(error))
    })

module.exports = router
