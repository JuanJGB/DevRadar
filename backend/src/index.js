const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');
const http = require('http');
const cors = require('cors');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://juan:jgbomnistack@cluster0-notj1.mongodb.net/week10?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
// Métodos HTTP: GET, POST, PUT, DELETE

// Tipos de parâmetros

// Query params: req.query (Filtros, ordenação, paginação,...)
// Route params: req.params (Identificar um recurso na alteração ou remoção)
// Body: req.body (Dados para criação ou alteração de um registro)

// MongoDB  (Não-relacional)
app.use(routes);

server.listen(3333);