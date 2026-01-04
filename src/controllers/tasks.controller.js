const pool = require("@/config/database");
const taskModel1 = require("@/models/task1.model");
const taskModel = require('@/models/task.model')

const getAll = async (req, res) => {
    const tasks = await taskModel.findAll()
    res.success(tasks)
};

const getOne = async (req, res) => {
  try {
    const task = await taskModel.findOne(req.params.id)
    if(!task) {
      return res.error({
        message: `Resoure not found for ID: ${req.params.id}`
      }, 404)
    }
    res.success(task)
  } catch (error) {
    res.error(error.message)
  }
};

const create = async (req, res) => {
  try {
    const newTask = await taskModel.createTask({title: req.body.title, slug: req.body.slug})
    if(newTask) {
      return res.success({
        message: `Add task ${req.body.title.trim()} (${newTask.insertId}) successfully`
      }, 201)
    }
  } catch (error) {
    res.error({
       message: error.message
    }, 400)
  }
};

const edit = async (req, res) => {
  try {
    await taskModel.editTask({
      id: req.params.id,
      title: req.body.title,
      slug: req.body.slug,
      isComplete: req.body.isComplete || 0
    })
    res.success({
      message: `Update task (${req.params.id}) successfully`
    })
  } catch (error) {
    res.error({
      message: error.message
    })
  }
};

const delele = async (req, res) => {
  try {
      await taskModel.deleteTask(req.params.id)
      res.success({
        message: `Delete task: ${req.params.id} successfully`
      }, 204)
  } catch (error) {
    res.error({
      message: error.message
    })
  }
};

const toggle = (req, res) => {
  res.send("Toggle Task");
};

module.exports = { getAll, getOne, create, toggle, edit, delele };
