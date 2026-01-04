const postModels = require('@/models/post.model')

const getAll = (req, res) => {
    try {
       res.success(postModels.findAll(), 201)
    } catch (error) {
        res.error( error ,400)
    }
}

const getOnePost = (req, res) => {
  try {
    const id = req.params.id;
    res.success(postModels.findOne(id), 200)
  } catch (error) {
    res.error(error.message, 400)
  }
};

const creatPost = (req, res) => {
  try {
    const content = req.body.content;
    const title = req.body.title;
    const newPost = postModels.createPost({
      title: title,
      content: content,
    });

    res.status(201).json({
      data: newPost,
    });
  } catch (error) {
    res.status(400).json({
      errorDesc: error.message,
    });
  }
};

const editPost = (req, res) => {
  try {
    const commentId = req.params.id;
    const editPost = postModels.editPost({
      id: commentId,
      content: req.body.content,
      title: req.body.title
    });
    res.status(200).json({
      data: editPost,
    });
  } catch (error) {
    if(error.message == 'Not found post') {
         res.status(404).json({
        success: false,
        message: error.message,
        });
    } else {
        res.status(400).json({
          success: false,
          message: error.message,
        });
    }
  }
};

const delelePost = (req, res) => {
    const idDelete = +req.params.id
    try {
        postModels.deletePost(idDelete)
        res.status(204).json()
    } catch (error) {
        res.status(404).json({
          success: false,
          message: error.message,
        });
    }
}


module.exports = {getAll, getOnePost, creatPost, editPost, delelePost}