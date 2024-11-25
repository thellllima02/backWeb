const express = require('express')
const port = 4000
const app = express();

app.use("/", (req, res) => {
    return res.send("Hello Word")
})

app.use("/produtos", (req, res) =>{
    return res.send("EndPoint de Produtos")
})

app.use("/cliente", (req, res) =>{
    return res.send("EndPoint de Cliente")
})

app.listen(port, ()=> {
    console.log("Server listening un port"+port)
})