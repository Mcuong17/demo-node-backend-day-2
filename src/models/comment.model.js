// Kết nối và xử lý dữ liệu liên quan đến DB

const { readDB, writeDB } = require('../../utils/jsonDB')

let db = {}
readDB().then((result) => {
    db = result
})

const commentModels = {
    findAll() {
        return db.comments
    },
    findOne(id) {
        const commentIndex = db.comments.findIndex(_comment => _comment.id == id)
        if(commentIndex == -1) {
            throw new Error("Comment not found")
        }
        return db.comments[commentIndex]
    },
    createComment(comment) {
        if(!comment.content) {
            throw new Error("Content not is null. Please add content before!")
        }
        if(!comment.postId) {
            throw new Error("PostID not is null. Please add content before!")
        }
        const maxId = db.comments.length > 0 ? Math.max(...db.comments.map(item => +item.id)) : 0
        const newComment = {
            id: +maxId + 1,
            postId: comment.postId,
            createdAt: new Date().toString(),
            comment: comment.content
        }
        db.comments.push(newComment)
        writeDB(db)
        return newComment
    },
    editComment(comment) {
        if(!comment.content) {
            throw new Error("Content can't be null!")
        }
        const indexComment = db.comment.findIndex(_cmt => _cmt.id == id)
        if(indexComment == -1) {
            throw new Error("Not found comment")
        }
         db.comments[indexComment] = {
            ...db.comments[indexComment],
            ...comment
         }
         writeDB(db)
         return db.comments[indexComment]
    }
    

}

module.exports = commentModels