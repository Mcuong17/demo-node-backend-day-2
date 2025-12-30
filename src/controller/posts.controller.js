const postModels = require('@/models/post.model')

const getAll = (req, res) => {
    try {
        return res.status(200).json({
            data: postModels.findAll()
        })
    } catch (error) {
        res.status(400).json({
            errorDesc: error
        })
    }
}

const getOnePost = (req, res) => {
  try {
    const id = req.params.id;
    return res.json({
      data: postModels.findOne(id),
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
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