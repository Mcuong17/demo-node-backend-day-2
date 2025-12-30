const commentModels = require("@/models/comment.model");

const getAllComment = (req, res) => {
  return res.json({
    data: commentModels.findAll(),
  });
};

const getOneComment = (req, res) => {
  try {
    const id = req.params.id;
    return res.json({
      data: commentModels.findOne(id),
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const creatComment = (req, res) => {
  try {
    const content = req.body.content;
    const postId = req.body.postId;
    const newComment = commentModels.createComment({
      postId: postId,
      content: content,
    });

    res.status(201).json({
      data: newComment,
    });
  } catch (error) {
    res.status(400).json({
      errorDesc: error.message,
    });
  }
};

const editComment = (req, res) => {
  try {
    const commentId = req.params.id;
    const editComment = commentModels.editComment({
      id: commentId,
      content: req.body.content,
    });
    res.status(200).json({
      data: editComment,
    });
  } catch (error) {
    if(error.message == 'Not found comment') {
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

const deleleComment = (req, res) => {
    const idDelete = +req.params.id
    try {
        commentModels.deleteComment(idDelete)
        res.status(204).json()
    } catch (error) {
        res.status(404).json({
          success: false,
          message: error.message,
        });
    }
}

module.exports = { getAllComment, getOneComment, creatComment, editComment, deleleComment };
