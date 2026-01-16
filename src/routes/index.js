const express = require('express')

const router = express.Router()



const tasksRoute = require('./tasks.route')
const postsRoute = require('./posts.route')
const usersRoute = require('./users.route')
const commentRoute = require('./comments.route')
const testRoute = require('./test.route')
const auth = require('./auth.route')

router.use('/tasks', tasksRoute) 
router.use('/posts', postsRoute)
router.use('/users', usersRoute)
router.use('/comments', commentRoute)
router.use('/test', testRoute)
router.use('/user', usersRoute)
router.use('/auth',auth)

module.exports = router