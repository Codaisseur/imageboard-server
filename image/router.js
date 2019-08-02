const { Router } = require('express')
const Image = require('./model')

const router = new Router()
router.get('/image', (request, response, next) => {
  Image
    .findAll()
    .then(images => response.send(images))
    .catch(next)
})

router.post('/image', (request, response, next) => {
  console.log('request.body test:', request.body)
  Image
    .create(request.body)
    .then(image => response.send(image))
    .catch(next)
})

module.exports = router
