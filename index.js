const express = require('express')
const router = require('./image/router')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(router)

const port = process.env.PORT || 4001
app.listen(port, () => console.log(`Listening on :${port}`))
