const debug = require('debug')('server:debug')
import express from 'express';
import errorAsync from '../middlewares/error';
import {
    hash,
    genSalt,
    compare
} from 'bcrypt';
import tokenizer, {
    decodedToken
} from '../handlers/tokenizer';
import auth from '../middlewares/auth';
import redisCache from '../middlewares/redis';
import winston from '../handlers/winston';
import joiErrorHandler from '../handlers/joiError';
import constants from '../../config/constants';
import userCollection, {
    validateUser,
    validateUserLoginDetails
} from '../models/user';
const router = express.Router();


router.post('/login', errorAsync(async (req, res) => {
    const error = validateUserLoginDetails(req.body);

    if (error.error) {
        const errorMessgage = await joiErrorHandler(error);
        winston.error(errorMessgage);
        debug(errorMessgage);
        return res.status(constants.status_code.STATUS_CODE_BAD_REQUEST).send({
            message: errorMessgage
        });
    } else {

        const userFromDB = await userCollection.findOne({
            email: req.body.email
        }).exec();

        if (userFromDB) {
            const {
                _id,
                password
            } = userFromDB;
            const resultOfComparision = await compare(req.body.password,password)
            debug(resultOfComparision);
            if (resultOfComparision) {
                const token = tokenizer(_id);
                return res.header('x-auth-token', token).status(constants.status_code.STATUS_CODE_SUCCESS).send({
                    message: "User logged "
                });
            }

        }
        return res.status(constants.status_code.STATUS_CODE_BAD_REQUEST).send({
            message: "Wrong credentials "
        });
    }



}));



/**
 * @param  {} '/register'
 * @param  {}(req,res)
 * @returns response object
 * @description registers new users 
 */
router.post('/register', errorAsync(async (req, res) => {

    const error = validateUser(req.body);
    if (error.error) {
        debug(error)
        const errorMessgage = await joiErrorHandler(error);
        winston.error(errorMessgage);
        debug(errorMessgage);
        return res.status(constants.status_code.STATUS_CODE_BAD_REQUEST).send({
            message: errorMessgage
        });
    }
    const userFromDB = await userCollection.findOne({
        email: req.body.email
    }).exec();
    if (userFromDB) return res.status(constants.status_code.STATUS_CODE_BAD_REQUEST).send({
        message: "User already exists"
    });
    const newUser = req.body;
    const salt = await genSalt(10);
    newUser.password = await hash(newUser.password, salt);
    const result = await userCollection.create(newUser);

    if (result) {
        const {
            _id
        } = result;
        const token = tokenizer(_id);

        return res.header('x-auth-token', token).status(constants.status_code.STATUS_CODE_CREATED).send({
            message: 'User created.'
        })
    }

}))





  router.get('/',auth,errorAsync(async(req,res)=>{

        const users= await userCollection.find({}).exec()

        return res.status(constants.status_code.STATUS_CODE_SUCCESS).send(users)
 
    }))


//  router.put('/password',auth,errorAsync(async(req,res)=>{

//  }))


module.exports = router;