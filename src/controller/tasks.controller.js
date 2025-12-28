


const getAll = async (req, res) => {
    res.send("Task All")
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