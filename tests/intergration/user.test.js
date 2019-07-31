import request from 'supertest';
import server from '../../src/app';
import userCollection from '../../src/models/user';
import {
  expect
} from 'chai';


describe(" USER API TESTS", () => {
  before(async () => {
    await userCollection.deleteMany({}).exec();
  })

  it("/api/v1/users/login test that server responds with bad request.", async () => {
    const response = await request(server).post('/api/v1/users/login');
    expect(response.status).to.equal(400)
    expect(response.body.message).to.be.instanceOf(Array);

  })

  it("/api/v1/users/login test that user is not found.", async () => {
    let data = {
      "email": "dummy@gmail.com",
      "password": "password67646e5",
    }
    const response = await request(server).post('/api/v1/users/login').send(data).set('Accept', 'application/json')
    expect(response.status).to.equal(400);
    expect(response.body.message).to.contain("Wrong credentials");
  })


  it("/api/v1/users/register user successfully.", async () => {
    let data = {
      "email": "dummy@gmail.com",
      "password": "password67646e5",
      "firstname": "john",
      "lastname": "doe",
      "isAdmin": true
    }
    const response = await request(server).post('/api/v1/users/register').send(data).set('Accept', 'application/json')
    expect(response.status).to.equal(201);
    expect(response.header['x-auth-token']).not.to.be.empty
    expect(response.body.message).to.contain('User created');
  })


  it("/api/v1/user/login user logged in successfully.", async () => {
    let data = {
      "email": "dummy@gmail.com",
      "password": "password67646e5"
    }
    const response = await request(server).post('/api/v1/users/login').send(data).set('Accept', 'application/json')
    expect(response.status).to.equal(200);
    expect(response.header['x-auth-token']).not.to.be.empty
    expect(response.body.message).to.contain('User logged');
  })

 
 
  it('/api/v1/users returns bad request ',async()=>{
    const response= await request(server).get('/api/v1/users');
    expect(response.status).to.equal(401)
  })


  // it('/api/v1/users returns an array of users ',async()=>{
  //   let data = {
  //     "email": "dummy@gmail.com",
  //     "password": "password67646e5"
  //   }
  //   const response= await request(server).post('/api/v1/users/login').send(data);
  //   expect(response.status).to.equal(200)
  //   expect(response.header['x-auth-token']).not.to.be.empty
    
  //   const _response= await request(server).get('/api/v1/users').set('x-auth-token',response.header['x-auth-token']);
  //   console.log("Response",);
  //   expect(_response.status).to.equal(200)
  //   expect(JSON.parse(_response.body)).to.be.an.instanceof(Array)
  // })


})