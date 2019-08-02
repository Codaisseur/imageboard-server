const express = require('express')
const router = require('./image/router')

const app = express()
app.use(router)
const port = process.env.PORT || 4001

app.listen(port, () => console.log(`Listening on :${port}`))
