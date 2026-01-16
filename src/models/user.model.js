const pool = require("@/config/database")

class Users {
    async findAll(limit, offset) {
        console.log(`SELECT * FROM users LIMIT ${limit} OFFSET ${offset}`);
        
        const [rows] = await pool.query(`SELECT * FROM users LIMIT ${limit} OFFSET ${offset}`)
        return rows
   }
   
   async findOne(id) {
    const [row] = await pool.query(`SELECT * FROM users where id = ${id}`)
    return row[0]
   }

   async count() {
    const [row] = await pool.query("SELECT COUNT(*) as count from users")
    return row[0].count
   }

   async create(params) {
         const [results] = await pool.query("INSERT into users SET ?", {
            title: params.title,
            slug: params.slug,
            description: params.description,
            content: params.content,
            status: params.status
        });
        return results
   }

    async update(params) {
    return await pool.query("UPDATE users SET ? WHERE id = ?", [
      {
            title: params.title,
            slug: params.slug,
            description: params.description,
            content: params.content,
            status: params.status
      },
      params.id,
    ]);
  }

  async destroy(id) {
    return await pool.query("DELETE FROM users WHERE id = ?", [id])
  }
}

module.exports = new Users()