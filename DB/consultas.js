//POOL para Postgres
const { Pool } = require('pg')
const pool = new Pool({ user: 'paulo', host: 'localhost', password: 'password', database: 'cursos', port: 5432 })

const saveCurso = async(cursoQueVieneDeAfuera) => {
  try{
    const data = Object.values(cursoQueVieneDeAfuera)
    data[1] = Number(data[1])
    data[3] = Number(data[3])
    const consult = {
      text: "INSERT INTO cursos (nombre, nivel, fecha, duracion) VALUES ( $1, $2, $3, $4)",
      values: data
    }
    const result = await pool.query(consult)
    return result
  } catch(e) {
    return e
  }
}
const getCursos = async() => {
  try{
    const showCursos = {
      text: "SELECT id, nombre, nivel, to_char( fecha, 'YYYY-MM-DD') as fecha, duracion FROM cursos ORDER BY id"
    }
    const result = await pool.query(showCursos)
    return result.rows
  } catch(e) {
    return e
  }
}

const updateCurso = async() => {
  try{
    const updateCurso = {
      text: "UPDATE cursos SET nombre = $2, nivel = $3, fecha = $4, duraracion = $5 WHERE id = $1",
      values: Object.values()
    }
    const result = await pool.query(updateCurso)
    return result.rows
  } catch(e) {
    return e
  }
}

const deleteCurso = async(id) => {
  try{
    const qry = {
      text: "DELETE FROM cursos WHERE id = $1 RETURNING *",
      values: [id]
    }
    const result = await pool.query(qry)
    return result.rows
  } catch(e) {
    return e
  }
}

module.exports = { saveCurso, getCursos, updateCurso, deleteCurso, }




