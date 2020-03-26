/**
 * Types Params
 * 
 * Query Params -> Parâmetros nomeados enviados na rota após o ? (Filter, Paginate)
 * ex: /users?name=Hellow | request.query
 * Route Params -> Parâmetros utilizados para identificar recursos
 * ex: /users/:id | request.params
 * Request Body ->
 * ex: | request.body
 */
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());  
app.use(express.json()); 
app.use(routes);

app.listen(3333);