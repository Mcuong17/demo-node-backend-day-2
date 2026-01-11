const userModel = require("@/models/user.model");
const paginationService = require("./pagination.service");

class PostService {
    constructor() {
        this.model = userModel
        paginationService.apply(this)
    }
}

module.exports = new PostService();
