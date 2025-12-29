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
        const maxId = db.comments.length > 0 ? Math.max(...db.comments.map(item => +item.id)) : 0
        const newComment = {
            id: +maxId + 1,
            postId: maxId + 1,
            createdAt: new Date().toString(),
            ...comment
        }
        db.comments.push(newComment)
        writeDB(db)
        return newComment
    },
    

}

module.exports = commentModels