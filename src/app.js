import constants from '../config/constants';
import compression from 'compression';
import database from './db/mongoDB';
import user from './routes/user';
import  express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import  bodyParser from 'body-parser';
import helmet from 'helmet';
import winston from './handlers/winston';
import swaggerUI from 'swagger-ui-express';
import redis from './db/redis';

const app = express();

//sets the options for the cors middleware
const options={
  origin:'*',
  optionsSuccessStatus:200
}
const swaggerDocument = require('../swagger.json');



//compresses the size of the response body to increase performance
app.use(compression());

//helmet protects the server from well-known web vulnerabilitys https://expressjs.com/en/advanced/best-practice-security.html#use-helmet
app.use(helmet());


 // support json encoded bodies in the req
app.use(bodyParser.urlencoded({ extended: true }));

//sets the limit of json bodies in the req body.
app.use(bodyParser.json({limit:'250mb'}));

// making ./public as the static directory
app.use('/static',express.static(path.join(__dirname,'../public'))); 

//adds swaggerUI to server;

//enables support for cross site scripting
app.use(cors(options));



if(app.get('env')==='development') app.use(morgan('combined', { stream: winston.stream }));

app.use(`${constants.API_ROOT_URL}/users`,user);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
database.connect(app.get('env'));
module.exports= app;