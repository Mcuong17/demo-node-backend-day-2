const express = require('express')

const router = express.Router()

const taskControllers = require("@/controllers/tasks.controller")
const taskValidator = require('@/middlewares/taskCreatevalidator.middleware')

//Default: /api/task
router.post("/", taskValidator)
router.get("/", taskControllers.getAll)
router.get("/:id", taskControllers.getOne)
router.get("/:page", taskControllers.getPage)
router.post("/", taskControllers.create)
router.put("/:id", taskControllers.edit)
router.post("/:id/toggle", taskControllers.toggle)
router.delete("/:id", taskControllers.delele)

module.exports = router