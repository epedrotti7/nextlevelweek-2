//Servidor
const express = require('express')
const server = express()
const nunjucks = require('nunjucks')
const { pageLanding, pageStudy, pageGiveClasses, saveClasses, pageCadastro} = require('./pages')

//configurar nunjucks (template engine)
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
server.use(express.urlencoded({ extended: true }))


//configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))

//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.get("/cadastro", pageCadastro)
.post("/save-classes", saveClasses)
//Porta
.listen(5500)