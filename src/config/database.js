const mySql =  require('mysql2/promise')

const pool = mySql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'admin',
    password: 'admin',
    database: "todo_dev",
    waitForConnections: true,
    maxIdle: 10,
    idleTimeout: 60000,
    queueLimit: 0,
    enableKeepAlive: true,
    keepAliveInitialDelay: 0
})

console.log("Database connect is successfully")

module.exports = pool