const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Aula 08')
})

app.listen(3000, () => {
    console.log("Servidor está rodando.")
})