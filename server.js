const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { nuevoCurso } = require('./consultas')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.listen(3006);

app.post("/curso", async (req,res) => {
  const nuevo_curso = req.body;
  cursos.push(nuevo_curso);
  res.send(cursos);
})
app.get("/cursos", (req,res) => {
  res.send(cursos);
})

app.put("/cursos/:curso", async (req,res) => {
  const { curso } = req.params;
  const { nombre } = req.body;
  alumnos = alumnos.map((alum) => (alum.nombre == curso ? { nombre } : alum));
  res.send(alumnos);
});

app.delete("/cursos/:curso", async (req,res) => {
  const { alumno } = req.params;
  alumnos = alumnos.filter((alum) => alum.nombre !== alumno);
  res.send(alumnos);
});
