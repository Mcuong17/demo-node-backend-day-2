require('module-alias/register')

const express = require('express')
const appRoute = require('@/routers')
const app = express()

// Constant
const port = 3017

// Middlewares
app.use(express.json()) // app.use cho phép dùng middleware...
app.use(express.static('public'))

// Router
app.use('/api', appRoute)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// Client -> request -> controller -> model -> JSON respone/View
// Routing:
// app.METHOD('/pathname')