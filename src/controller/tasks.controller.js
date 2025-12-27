
const getAll = (req, res) => {
    res.send("Task List")
}

const getOne = (req, res) => {
    res.send("Task Detail")
}

const create = (req, res) => {
    res.send("Task Created")
}

const toggle = (req, res) => {
    res.send("Toggle Task")
}

module.exports = { getAll, getOne, create, toggle }