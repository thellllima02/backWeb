const express = require('express')
const clientsRoutes = require("./routers/clients.js")
const productsRoutes = require("./routers/produtos.js")

const port = 4000
const app = express();

app.use = express();

app.use('/compras', comprasRoutes)
app.use("/clientes", clientsRoutes)
app.use("produtos", productsRoutes)

app.use("/", (req, res) =>{
    return res.send("API de gerenciamento de compras")
})

app.listen(port, ()=> {
    console.log("Server listening un port"+port)
})