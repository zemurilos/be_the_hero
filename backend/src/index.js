const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);


/**
 * Entidades:
 * 
 * ONGs
 * Caso (Incident)
 * 
 * Funcionalidades ONG:
 * 
 * Login
 * Logout
 * Cadastro user
 * Cadastrar novos casos
 * Cadastrar novos casos
 * Listar casos específicos de uma ONG
 * Listar todos os casos
 * Entrar em contato com a ONG
 * 
 */
