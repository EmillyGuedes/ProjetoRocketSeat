const proffys = [
  {
    name: "Gustavo",
    avatar: "/images/gustavoquimica.jpg",
    whatsapp: "73998221323",
    bio:
      "Sou graduado em Química com experiencia rede pública de Ensino e assistência com estudantes em sala de reforço.",
    subject: "Mátematica",
    cost: "20",
    weekday: [3],
    time_from: [720],
    time_to: [1200],
  },
];

const subjects = [
                "Artes",
                "Educação Física",
                "Biologia",
                "Física",
                "Ciências",
                "Geografia",
                "História",
                "Inglês",
                "Matemática",
                "Português",
                "Química"
]

const weekdays = [
  "Domingo",
  "Segunda-Feira",
  "Terça-Feira",
  "Quarta-Feira",
  "Quinta-Feira",
  "Sexta-Feira",
  "Sábado"
]

function getSubject(subjectNumber) {
  const position = +subjectNumber -1
  return subjects[position]
}


function pageLanding(req, res) {
  return res.render("index.html");
}

function pageStudy(req, res) {
  const filters = req.query
  return res.render("study.html", {proffys, filters, subjects, weekdays});
}

function pageGiveClasses(req, res) {
  const dados = req.query
  const isNotEmpty = Object.keys(dados).length > 0
  if (isNotEmpty) {
    data.subject= getSubject(data.subject)
    proffys.push(dados)

    return res.redirect("/study")
  }
  
  return res.render("give-classes.html", {subjects, weekdays});
}

const express = require("express");
const server = express();

const nunjucks = require("nunjucks");
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

server
  .use(express.static("public"))
  .get("/", pageLanding)
  .get("/study", pageStudy)
  .get("/give-classes", pageGiveClasses)
  .listen(5500);
