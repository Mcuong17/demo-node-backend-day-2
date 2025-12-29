const commentModels = require('@/models/comment.model')


const getAllComment = (req, res) => {
    return res.json({
        data: commentModels.findAll()
    })
}

const getOneComment = (req, res) => {
    try {
        const id = req.params.id
        return res.json({
            data: commentModels.findOne(id)
        })
    } catch (error) {
        res.json(400).json({
            message: error.message
        })
    }
}

const cretaComment = (req, res) => {
    try {
        const content = req.body.content
        const postId = req.body.postId
        const newComment = commentModels.createComment({
            postId: postId,
            content: content
        })

         res.status(201).json({
            data: newComment
        })
    } catch (error) {
        res.status(400).json( {
            errorDesc: error.message
        })
    }
}



module.exports = {getAllComment, getOneComment, cretaComment}