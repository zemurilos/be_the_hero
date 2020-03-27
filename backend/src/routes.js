const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;

//Learning:

/**
 * Rota  / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/listar informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: DEletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros
  * 
  * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parâmetros utilizados para identificar recursos
  * Exemplo no fim da aplicação
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  * 
  */

  /**
   * Bancos de Dados
   * 
   * SQL: MySQL, SQLite, PostgreSQL, Oracle...
   * NoSQL: MongoDB, CouchDB, etc
   * 
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    * 
    */


//Exemplo Route param
//app.get('/users/:id', (request, response) => {