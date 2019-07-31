import winston from './../handlers/winston';
import constants from '../../config/constants';



export default function errorMiddleware(routeHandler) {
    return async (req, res, next) => {
        try {
            await routeHandler(req, res);
        } catch(error){
            res.status(constants.status_code.STATUS_CODE_INTERVAL_ERROR).send({message:'something went wrong'})
            winston.error(error.message)
        }
    }
}
