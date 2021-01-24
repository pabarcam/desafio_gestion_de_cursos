const express = require('express')
const bodyParser = require('body-parser')
const { saveCurso, getCursos, updateCurso, deleteCurso } = require('./DB/consultas')
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.listen(3006, _ => console.log('Server running at: http://localhost:3006'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post("/cursos", async(req,res) => {
  const data = req.body

  const respuestaDB = await saveCurso(data)
  res.send(respuestaDB)
})

app.get('/cursos', async(req, res) => {
  const cursos = await getCursos()
  res.send(cursos)
})

app.put('/cursos/:id', async (req, res) => {
  const id  = req.params.id
  const data = req.body
  const response = await updateCurso({ id, ...data })
  res.send(response)
})

app.delete('/cursos/:id', async (req, res) => {
  const { id } = req.params
  const response = await deleteCurso(id)
  res.send(response)
})