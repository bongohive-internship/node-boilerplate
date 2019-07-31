
import jwt from 'jsonwebtoken';
import config from 'config';

 export default (_id)=>{
    const token = jwt.sign({_id:_id},config.get('DEV_API_KEY'),{expiresIn:'4h'});    
     return token;
}

export const  decodedToken=async(token)=>{
   const _id= await jwt.verify(token,config.get('DEV_API_KEY'));
   if(_id) return _id;

   return null;

}