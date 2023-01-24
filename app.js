const express = require("express");
const path = require("path");
const app = express();

app.use (express.static(path.join(__dirname, 'public')))

app.get ("/home", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
})

const PORT = 3030

app.listen (PORT, console.log(`Servidor levantado en el puerto ${PORT}
http://localhost:${PORT}/home`))