const { readDB, writeDB } = require('../../utils/jsonDB')

let db = {}
readDB().then(result => {
    db = result
})



const taskModel = {
    findAll() {
        return db.tasks
    },
    findOne(taskId) {
          const taskIndex = db.tasks.findIndex(_task => _task.id == +taskId)
        if(taskIndex == -1) {
            throw new Error("Task not found!")
        }
        return db.tasks.find(_task => _task.id == id)
    },
    createTask(task) {
        let maxId = db.tasks.length > 0 ?  Math.max(...db.tasks.map(item => item.id)) : 0
       if(!task.title  || task.title == '') {
        throw new Error("Add task false: title is not null")
       }
        const newTask = {
            id: maxId + 1,
            ...task
        }
        db.tasks.push(newTask)
        writeDB(db)
        return newTask
    },
    editTask(task) {
        const taskIndex = db.tasks.findIndex(_task => _task.id == +task.id)
        if(taskIndex == -1) {
            throw new Error('Edit false: Task not found!')
        }
        db.tasks[taskIndex] = {
            ...db.tasks[taskIndex],
            ...task
        }
        writeDB(db)
        return db.tasks[taskIndex]
    },
    deleteTask(task) {
        const taskIndex = db.tasks.findIndex(_task => _task.id == +task.id)
        if(taskIndex == -1) {
           throw new Error('Delete false: Task not found!')
        }
        db.tasks.pop(taskIndex)
         writeDB(db)
         return db.tasks
    }
}

module.exports = taskModel