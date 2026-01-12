const pool = require("@/config/database")


class Posts {
    async findAll(limit, offset, userId) {
        
        const [rows] = await pool.query(`SELECT * FROM posts WHERE user_id=${userId} LIMIT ${limit} OFFSET ${offset}`)
        return rows
   }
   
   async findOne(id) {
    const [row] = await pool.query(`SELECT * FROM posts where id = ${id}`)
    return row[0]
   }

   async findUserPosts(userId) {
        const query = `SELECT * FROM posts WHERE id in (SELECT post_id FROM user_post where user_id = ${userId})`
        const [row] = await pool.query(query)
        return row
   }

   async count() {
    const [row] = await pool.query("SELECT COUNT(*) as count from posts")
    return row[0].count
   }

   async create(params) {
         const [results] = await pool.query("INSERT into posts SET ?", {
            title: params.title,
            slug: params.slug,
            description: params.description,
            content: params.content,
            status: params.status
        });
        return results
   }

    async update(params) {
    return await pool.query("UPDATE posts SET ? WHERE id = ?", [
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
    return await pool.query("DELETE FROM posts WHERE id = ?", [id])
  }
}

module.exports = new Posts()