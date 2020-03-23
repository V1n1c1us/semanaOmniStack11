const express = require('express');

const app = express();



app.get('/', (req, res) => {
    return res.json({
        evento: 'Senama Omnistack 11.0',
        aluno: 'Vinícius'
    })
})


app.listen(3333);