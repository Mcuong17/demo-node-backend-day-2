const express = require('express')
const router = express.Router()
const postController = require("@/controllers/post.controller")

//Default: /api/post

router.get("/", postController.getAll)
router.get("/:id", postController.getOnePost)
router.post("/", postController.creatPost)
router.put("/:id", postController.editPost)
router.delete("/:id", postController.delelePost)
module.exports = router