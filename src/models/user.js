import mongoose from 'mongoose'
import moment from 'moment-timezone';
import mongoosePaginate from 'mongoose-paginate';
import Joi from 'joi';



let schema = new mongoose.Schema({
    firstname: {
        type: String,
        require: true,
    },

    lastname: {
        type: String,
        require: true,
    },

    password: {
        type: String,
        require: true
    },

    email: {
        type: String,
        require: true
    },
    isAdmin:{
        type:Boolean,
        default:false,
        require:true  
      }
    ,
    createdAt: {
        type: String,
        default: moment().tz("Africa/Windhoek").format('LLL')
    }
}, {
    collection: 'User',
    strict: true
});

schema.plugin(mongoosePaginate);


export const validateUser = (user) => {
    const objectSchema = Joi.object().keys({
        firstname: Joi.string().required(),
        lastname: Joi.string().max(255).required(),
        email: Joi.string().email({
            minDomainAtoms: 2
        }).required(),
        password: Joi.string().min(8).required(),
        isAdmin:Joi.boolean().default(false).required()
      
    });

    return Joi.validate(user, objectSchema, {
        abortEarly: false
    });
};

export const validateUserLoginDetails = (user) => {
    const objectSchema = Joi.object().keys({
        email: Joi.string().email({
            minDomainAtoms: 2
        }).required(),
        password: Joi.string().min(8).required()
      
    });

    return Joi.validate(user, objectSchema, {
        abortEarly: false
    });
};


module.exports = mongoose.model('User', schema, "Users");
module.exports.validateUser=validateUser;
module.exports.validateUserLoginDetails=validateUserLoginDetails;