const {readDB, writeDB} = require("../../utils/jsonDB")

let db = {

}

readDB().then((result) => {
    db = result
})


const postModels = {
    findAll() {
        return db.posts
    },
    findOne(id) {
            const postIndex = db.posts.findIndex(_post => _post.id == id)
            if(postIndex == -1) {
                throw new Error("Post not found")
            }
            return db.posts[postIndex]
        },
        createPost(post) {
            if(!post.content) {
                throw new Error("Content not is null. Please add content before!")
            }
            if(!post.title) {
                throw new Error("Tittle not is null. Please add content before!")
            }
            const maxId = db.posts.length > 0 ? Math.max(...db.posts.map(item => +item.id)) : 0
            const newPost = {
                id: +maxId + 1,
                title: post.title,
                createdAt: new Date().toString(),
                content: post.content
            }
            db.posts.push(newPost)
            writeDB(db)
            return newPost
        },
        editPost(post) {
            if(!post.content) {
                throw new Error("Content can't be null!")
            }
            if(!post.title) {
                throw new Error("Title can't be null!")
            }
            const indexPost = db.posts.findIndex(_cmt => _cmt.id == post.id)
            if(indexPost == -1) {
                throw new Error("Not found post")
            }
             db.posts[indexPost] = {
                ...db.posts[indexPost],
                content: post.content,
                title: post.title
             }
             writeDB(db)
             return db.posts[indexPost]
        },
        deletePost(id) {
            const index = db.posts.findIndex(_post => _post.id == id)
            if(index == -1) {
                throw new Error("Not found post")
            }
            db.posts.pop(index)
            writeDB(db)
            return db.posts
        }
}

module.exports = postModels