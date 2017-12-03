const router = require('express').Router()
const { Project } = require('../models')

router.get('/projects', (req, res, next) => {
  Project.find()
    // newest project first
    .sort({ createdAt: -1 })
    // Send the data in JSON format
    .then((projects) => res.json(projects))
    // Forward any errors to error handler
    .catch((error) => next(error))
    })
    .get('/projects/:id', (req, res, next) => {
      const id = req.params.id
      Project.findById(id)
        .then((project) => {
          if (!project) { return next() }
          res.json(project)
        })
        .catch((error) => next(error))
    })
    .post('/projects',  (req, res, next) => {
      let newProject = req.body
      Project.create(newProject)
        .then((project) => res.json(project))
        .catch((error) => next(error))
    })

module.exports = router
