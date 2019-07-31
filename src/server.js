//server.js
import  app from './app';
import config from 'config';
import winston from './handlers/winston';

app.listen(config.get('port'), () => {

    winston.info('server is started');
    console.log(`Server is listening on port ${config.get('port')}`);
})
