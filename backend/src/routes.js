const express = require('express');

const routes = express.Router();

routes.get('/user', (req, res) => {
  return res.json({
      evento: 'Senama Omnistack 11.0',
      aluno: 'Vinícius'
  })
})

module.exports = routes;
