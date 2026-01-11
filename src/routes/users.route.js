const express = require('express')
const router = express.Router()
const userController = require("@/controllers/user.controller")

router.get("/", userController.getAll)
// router.get("/:id", userController.getOnePost)
// router.post("/", userController.creatPost)
// router.put("/:id", userController.editPost)
// router.delete("/:id", userController.delelePost)

module.exports = router