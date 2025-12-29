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
    res.json(404).json({
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
      content: req.body.title,
    });
    res.json({
      data: editComment,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = { getAllComment, getOneComment, creatComment, editComment };
