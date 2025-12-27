const express = require('express')

const router = express.Router()

const taskControllers = require("@/controller/tasks.controller")

//Default: /api/task

router.get("/", taskControllers.getAll)
router.get("/:id", taskControllers.getOne)
router.post("/", taskControllers.create)
router.post("/:id/toggle", taskControllers.toggle)

module.exports = router