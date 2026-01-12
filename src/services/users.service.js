const userModel = require("@/models/user.model");
const paginationService = require("./pagination.service");
const postModel = require("@/models/post.model");

class PostService {
    constructor() {
        this.model = userModel
        paginationService.apply(this)
    }
    async findUserPosts  ()  {
        const result = await postModel.findUserPosts
        return result
    }
}

module.exports = new PostService();
