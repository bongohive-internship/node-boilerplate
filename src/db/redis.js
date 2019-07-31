import redis from 'redis';
import winston from '../handlers/winston';
const client = redis.createClient();


client.on('connect',()=>{
   winston.info('Redis server connected.') 
   console.log('Redis server connected')
})


client.on('error',(err)=>{
  winston.error(err) 
  console.log('Something went wrong ');
 })

 module.exports=client;