import client from  '../db/redis';
import constants from  '../../config/constants';
import winston from '../handlers/winston';

export default async(req,res,next)=>{
    const key = req.originalUrl || req.url;


    client.get(key, function(err, reply){
        if(err) winston.error(error);
        if(reply){
            const cacheData= JSON.parse(reply)
            winston.info("INFO"+cacheData)
           return res.status(constants.status_code.STATUS_CODE_SUCCESS).send([reply]);
        }else{
            res.sendResponse = res.send;
            res.status(constants.status_code.STATUS_CODE_SUCCESS).send = (body) => {
                client.setex(key,constants.CACHE_EXPIRATION, JSON.stringify(body));
                winston.info("INFO"+body)
                res.sendResponse(body);    winston.info("INFO"+body)
            }
            next();
        }
      });


    // try {  
    // const cacheData= await client.get(key);
    // if(cacheData){
    //     return res.status(constants.status_code.STATUS_CODE_SUCCESS).send(cacheData);
    // } else{
    //     res.sendResponse=res.send;
    //     res.status(constants.status_code.STATUS_CODE_SUCCESS).send=(body)=>{
    //         client.set(key,JSON.stringify(body));
    //         res.sendResponse(body);
    //     }
    //     next();
    // } 
    // } catch (error) {
    //     res.status(constants.status_code.STATUS_CODE_INTERVAL_ERROR).send({message:'something went wrong'})
    //     winston.error(error.message)
 
    // }
   
}