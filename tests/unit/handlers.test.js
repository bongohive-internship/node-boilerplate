import joiError from '../../src/handlers/joiError';
import tokenizer from '../../src/handlers/tokenizer';
import {validateUser} from '../../src/models/user';
import {expect} from 'chai';


describe('Handler tests',()=>{

    it('joiError returns array ',async()=>{
        let data = {
            "email": "dummy@gmail.com",
            "password": "password67646e5",
            "firstname": "john",
          }

          const validation= validateUser(data)
          const result= await joiError(validation);
          expect(result).to.be.an.instanceof(Array)
        

    })
})

