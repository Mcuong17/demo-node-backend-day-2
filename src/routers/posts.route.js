const express = require('express')
const router = express.Router()
const taskController = require("@/controller/tasks.controller")

//Default: /api/post

router.get("/", taskController.getAll)

router.get("/:id", (req, res) => {
    res.send("Task Detail")
})

router.post("/", (req, res) => {
    res.send("Task Created")
})

module.exports = router