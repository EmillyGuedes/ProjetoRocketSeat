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

function pageLanding(req, res) {
  return res.render("index.html");
}

function pageStudy(req, res) {
  return res.render("study.html", {proffys});
}

function pageGiveClasses(req, res) {
  return res.render("give-classes.html");
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
