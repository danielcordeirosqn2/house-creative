  // usei o express para criar e configura o meu servidor
const express = require("express")
const server = express()


const ideias = [
    {
      img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
      title: "Meditação",
      category: "Mentalidade",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
      url: "https://www.youtube.com/watch?v=gqLmCmafYbU",
    },

    {
      img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
      title: "Exercícios",
      category: "Saúde",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. ",
      url: "https://www.youtube.com/watch?v=DfIt58Ed5VU",
    },

    {
      img: "https://image.flaticon.com/icons/svg/660/660589.svg",
      title: "Músicas",
      category: "Distração",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      url: "https://www.youtube.com/watch?v=FUz0a2cl_RM&list=PLdQ4n6NTvkjHPU078MgYl3m48cvlap0fi",
    },

    {
      img: "https://image.flaticon.com/icons/svg/187/187209.svg",
      title: "Filmes e Séries",
      category: "Entretenimento",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      url: "https://www.youtube.com/watch?v=Rk85x9AL4YM",
    },
]


// configurar arquivos estáticos (css, script, imagens)
server.use(express.static("public"))

// confinguração do nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("views", {
  express: server,
  noCache: true,
})


//criei uma rota / e capturo o pedido do cliente para resposta
server.get("/", function(req, res) {

    const resersedIdeias = [...ideias].reverse()

    let lastIdeias = []
    for (let ideia of resersedIdeias) {
        if(lastIdeias.length < 3) {
          lastIdeias.push(ideia)
        }
    }

    return res.render("index.html", { ideias: lastIdeias })
}) 

server.get("/ideias", function(req, res) {

  const resersedIdeias = [...ideias].reverse()
    
  return res.render("ideias.html", {ideias: resersedIdeias})
}) 

//ligguei na porta 3000
server.listen(3000) 