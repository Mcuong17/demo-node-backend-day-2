const postsModel = require("@/models/post.model");
const paginationService = require("./pagination.service");

class PostService {
    constructor() {
        this.model = postsModel
        paginationService.apply(this)
    }
}

module.exports = new PostService();
