const express = require('express')
const router = express.Router()
const commentController = require("@/controllers/comment.controller")



router.get('/',commentController.getAllComment)
router.get('/:id', commentController.getOneComment)
router.post('/', commentController.creatComment)
router.put('/:id', commentController.editComment)
router.delete('/:id', commentController.deleleComment)

module.exports = router 