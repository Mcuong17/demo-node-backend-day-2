const taskModel = require("@/models/task.model");

const getAll = async (req, res) => {
  const tasks = taskModel.findAll();
  res.json({
    data: tasks,
  });
};

const getOne = (req, res) => {
  try {
    const task = taskModel.findOne(+req.params.id);
    res.json({
      data: task,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const create = (req, res) => {
  try {
    const newTask = taskModel.createTask({
      title: req.body.title,
      isComplete: false,
    });
    res.json({
      data: newTask,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const edit = (req, res) => {
  try {
    const taskid = req.params.id;
    const editTask = taskModel.editTask({
      id: taskid,
      title: req.body.title,
      isComplete: req.body.isComplete,
    });
    res.json({
      data: editTask,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const delele = (req, res) => {
  try {
    const taskid = req.params.id;
    const deleteTask = taskModel.deleteTask({
      id: taskid,
    });
    res.json({
      data: deleteTask,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

const toggle = (req, res) => {
  res.send("Toggle Task");
};

module.exports = { getAll, getOne, create, toggle, edit, delele };
