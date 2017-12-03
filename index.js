const express = require('express')
const { Project, Job } = require('./models') // keep index up to date in case of new models
const { projects, jobs } = require('./routes')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3030

let app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
// app.get('/projects')

// routes
  .use(projects)
  .use(jobs)

app.use((err, req, res, next) => {
  res.status(err.status || 500)
  res.send({
    message: err.message,
    // only print full errors in development
    error: app.get('env') === 'development' ? err : {}
  })
})

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
