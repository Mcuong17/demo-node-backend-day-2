const express = require('express')

const router = express.Router()

const taskControllers = require("@/controllers/tasks.controller")

//Default: /api/task

router.get("/", taskControllers.getAll)
router.get("/:id", taskControllers.getOne)
router.post("/", taskControllers.create)
router.put("/:id", taskControllers.edit)
router.post("/:id/toggle", taskControllers.toggle)
router.delete("/:id", taskControllers.delele)

module.exports = router