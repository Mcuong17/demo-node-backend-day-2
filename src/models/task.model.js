const pool = require("@/config/database");

class Tasks {

  async findAll() {
    const [rows, fields] = await pool.query("SELECT * FROM tasks");
    return rows;
  }

  async findOne(id) {
    const [rows, fields] = await pool.query(
      `SELECT * FROM tasks WHERE  id = ${id}`
    );
    return rows;
  }

  async create(param) {
    const [results] = await pool.query("INSERT into tasks SET ?", {
      title: param.title,
      slug: param.slug,
    });
    return results;
  }

  async update(param) {
    return await pool.query("UPDATE tasks SET ? WHERE id = ?", [
      {
        title: param.title,
        slug: param.slug,
        is_completed: param.isComplete,
      },
      param.id,
    ]);
  }

  async destroy(id) {
    return await pool.query("DELETE FROM tasks WHERE id = ?", [id])
  }
}

module.exports = new Tasks();
