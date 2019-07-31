import joiError from '../../src/handlers/joiError';
import tokenizer from '../../src/handlers/tokenizer';
import {validateUser} from '../../src/models/user';
import {expect} from 'chai';


describe('User Model tests',()=>{

    it('validateUser returns null validation ',async()=>{
        let data = {
            "email": "dummy@gmail.com",
            "password": "password67646e5",
            "firstname": "john",
            "lastname": "doe",
            "isAdmin": true
          }

          const validation= validateUser(data)
          expect(validation.error).to.be.null;
        

    })

    it('validateUser returns non null validation ',async()=>{
        let data = {
            "email": "dummy@gmail.com",
            "password": "password67646e5",
            "firstname": "john",
          }

          const validation= validateUser(data)
          expect(validation.error).to.not.be.null;
          expect(validation.error.details).to.be.an.instanceof(Array)
    })

})

