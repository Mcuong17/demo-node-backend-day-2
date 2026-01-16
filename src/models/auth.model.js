const pool = require("@/config/database")


class Auths {
      async create(params) {
         const [{ insertId }] = await pool.query("INSERT into users SET ?", {
            email: params.email,
            password: params.password
        });
        return insertId
   }

   async login({email, password}) {
      const [row] = await pool.query("SELECT email, first_name, last_name FROM users WHERE email = ? AND password = ?", 
        [email,password]
      )
      return row
   }
   
}

module.exports = new Auths()