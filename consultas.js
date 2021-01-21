//POOL para Postgres
const { Pool } = require('pg')
const pool = new Pool({ user: 'paulo', host: 'localhost', password: 'password', database: 'cursos', port: 5432 })

const nuevoCurso = async(id, nombre, nivel, fecha, duracion ) => {
  try{
    const result = await pool.query(`INSERT INTO cursos () VALUES ('${id}, ${nombre}, ${nivel}, ${fecha}, ${duracion}') RETURNING *`)
    return result.rows
  } catch(e) {
    return e
  }
}

module.exports = { nuevoCurso }




