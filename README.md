![](https://miro.medium.com/max/902/1*alZcSIb0lcN7gQIx2tJ_tg.png)
BongoHive Express JS Server Start
=======================

[![Dependency Status](https://david-dm.org/sahat/hackathon-starter/status.svg?style=flat)](https://david-dm.org/sahat/hackathon-starter) [![Build Status](https://travis-ci.org/sahat/hackathon-starter.svg?branch=master)](https://travis-ci.org/sahat/hackathon-starter) [![Join the chat at https://gitter.im/sahat/hackathon-starter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/sahat/hackathon-starter?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)


Jump to [What's new?](https://github.com/sahat/hackathon-starter/blob/master/CHANGELOG.md)

A boilerplate for **Node.js** Backend  applications using Express.

The code contents all the necessary packages and configurations to get started with build your node server quickly.


Table of Contents
-----------------

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [List of Packages](#list-of-packages)
- [Docker](#docker)
- [Branch Strategy](#branch-strategy)
- [Deployment](#deployment)
- [Continous Intergration and Continous Deployment](#Continous-Intergration-and-Continous-Deployment)
- [Cheatsheets](#cheatsheets)
    - [ES6](#-es6-cheatsheet)
    - [JavaScript Date](#-javascript-date-cheatsheet)
    - [Mongoose Cheatsheet](#mongoose-cheatsheet)
- [Changelog](#changelog)
- [Contributing](#contributing)
- [License](#license)

Features
--------

- **Local Authentication** using Email and 
Prerequisites
- **Logging** using winston.
- **Deployment** using Docker and Jenkins
- **Testing** using Mocha and Chai.
-------------

Installations
------
- [MongoDB](https://www.mongodb.org/downloads)
- [Node.js 8.0+](http://nodejs.org)
- Command Line Tools
- Yarn package manager by Facebook
 - <img src="http://deluge-torrent.org/images/apple-logo.gif" height="17">&nbsp;**Mac OS X:** [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) (or **OS X 10.9+**: `xcode-select --install`)
 -[Visaul Studio Code](https://code.visualstudio.com) + [Windows Subsystem for Linux - Ubuntu](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
 - <img src="https://lh5.googleusercontent.com/-2YS1ceHWyys/AAAAAAAAAAI/AAAAAAAAAAc/0LCb_tsTvmU/s46-c-k/photo.jpg" height="17">&nbsp;**Ubuntu** / <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Logo_Linux_Mint.png" height="17">&nbsp;**Linux Mint:** `sudo apt-get install build-essential`
 - <img src="http://i1-news.softpedia-static.com/images/extra/LINUX/small/slw218news1.png" height="17">&nbsp;**Fedora**: `sudo dnf groupinstall "Development Tools"`
 - <img src="https://en.opensuse.org/images/b/be/Logo-geeko_head.png" height="17">&nbsp;**OpenSUSE:** `sudo zypper install --type pattern devel_basis`

**Note:** If you are new to Node or Express, I recommend to watch
[Node.js and Express 101](https://www.youtube.com/watch?v=BN0JlMZCtNU)
screencast by Alex Ford that teaches Node and Express from scratch. Alternatively,
here is another great tutorial for complete beginners - [Getting Started With Node.js, Express, MongoDB](http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/).

Getting Started
---------------

The easiest way to get started is to clone the repository:

```bash
# Get the latest snapshot
git clone https://github.com/BongoHive/express-node-server-boilerplate.git [PROJECT_NAME]

# Change directory
cd [PROJECT_NAME]

# Install NPM dependencies
yarn install
You
# Then simply start your app in development with nodemon
yarn dev
```

**Note:** This bolierplate has [Nodemon](https://github.com/remy/nodemon) already added to it. You just need to run yarn dev. Nodemon watches for any changes in your  node.js app and automatically restarts the
server. If you don't need it, just use yarn start.



Project Structure
-----------------

| Name                               | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
| **config**/constants.js            |  Holds all constants need in the application                 |
| **config**/custom-environment.json | Contains custom environmental variable mappings (https://github.com/lorenwest/node-config/wiki/Environment-Variables#custom-environment-variables)           |
| **config**/default.json         | if NODE_ENV is not set, config will use the settings from here.                                |
| **config**/development.json        | Configuartion settings in a development environment.                            |
| **config**/staging.json            | Configuration settings in a staging environment                     |
| **config**/production.json                | Configuartion settings in a production environment                          |
| **config**/test                       | Configuration settings in a test environment.                         |
| **dist**/                             | dist contains all producton versions of the app (generated after running yarn build)                 |
| **jenkins_scripts**/          |       bash scripts used by the Jenkinsfile in CI/CD Pipeline
| **logs**       |                    All log files are recorded here.          |
| **public**                          | uploads are stored here.                        |
| **src**/                 | contains the source code     |
| **src/db/** mongoDB.js                     | contains all code to connect to MongoDB Database                               |
| **src/handlers/** joiError.js       | Processes the validation error from Joi             |
| **src/handlers/** tokenizer.js    | Handles creating the auth token.                                     |
| **src/handlers/** winston.js      | Winston logger handler used to create logs.                                     |
| **src/middlewares/** auth.js               | Authentication middlerware                                           |
| **src/middlewares/** error.js                 | middleware that wraps a try and catch block on routes                                          |
| **models/**                      | contains all Mongoose models.                    |
| **models/** users.js                       | contains the schema and other functions relating to the user model.           |
| **routes/**                          | contains all the routing modules in the application.                                    |
| **routes/** user.js                         | sample routing module for basic user CRUD API endpoints.                             |
| app.js                        | contains all the app configurations without the port configuartion (removed for testing purposes)                |
| server.js                             | The main application file.                                   |
|**tests/**                | contains all  intergration and tests written using mocha and chai and supertest.                           |
| .dockerignore                         | all files needed to be ignored by docker.                                   |
| .gitignore                       | files and folders git should ignore                                            |
| babel.config.js                  | Babel configuration file |
| Dockerfile                  | Docker build file |
|Jenkinsfile                  | Contains all the steps the Jenkins CI/CD Server needs to build the project |
| package.json                  | Contains project wide configurations and NPM module listings, among other things. |
| swagger.json                  | Contains swagger document definition used by swagger-ui for API route documentation.|


List of Packages
----------------

| Package                         | Description                                                             |
| ------------------------------- | ------------------------------------------------------------------------|
 bcrypt                  | Library for hashing and salting user passwords.                         |
| body-parser                     | Node.js body parsing middleware.                                        |
| chai                            | BDD/TDD assertion library.                |
| compression                     | Node.js compression middleware.                |  |
| express                         | Node.js web framework.                                      | mocha                           | Test framework.                                                         |
| mongoose                        | MongoDB ODM.                                                            |
| morgan                          | HTTP request logger middleware for node.js.                             |
| multer                          | Node.js middleware for handling `multipart/form-data`.  |
| supertest                       | HTTP assertion library.                                                 |
|joi                 |javascript object validator|
|jsonwebtoken|authencation library for node js|
|config| environment configuration library|
|winston  | powerful logging library for node js|
|moment  |powerful date & time formatting library|
|moment-timezone |useful time-zone specification library used with moment |
|swagger-ui| API endpoint documentation library|
|cors| Cross Site Script middleware|
|husky|adds prehooks to run tests before git commit and git push|

----

Project Command Line Scripts
-----------------

The project has the following commandline scripts



|Script| Purpose|
|-------|-------------|
|**yarn dev**|runs the application in devlepemnt mode with NODE_ENV=development and Nodemon activated for reloading when files changed.|
|**yarn start**| runs the application in development without using nodemon|
|**yarn test**| runs the application in test mode using mocha with NODE_ENV=test|
|**yarn build**|builds the application for production.|
|**yarn serve**|runs the application in production with NODE_ENV=production|

Branch Strategy
----------
The branch strategy helps
1. **Master branch** : this contains all the production ready code.
2. **Staging Branch**: this branch holds the pre-production grade and is used to test production readiness of the code.
3. **Development Branch**: this branch holds all the code that has features not yet tested for production. All developers should create feature branches from it.
4. **Feature Branch**: this branch holds all the code for a feature or bug fixes that a developer(s) is working. The naming should be based on the name of the feature e.g USER_REGISTRATION_FEATURE and should be deleted after push into development branch.-

**Note:**

Some suggestions for naming your feature branches:

- users/username/description
- users/username/workitem
- bugfix/description
- features/feature-name
- features/feature-area/feature-name
- hotfix/description

Docker
----------

You will need docker and docker-compose installed to build the application.

- [Docker installation](https://docs.docker.com/engine/installation/)

- [Common problems setting up docker](https://docs.docker.com/toolbox/faqs/troubleshoot/)

After installing docker, start the application with the following commands :

```
# To build the project for the first time or when you add dependencies
docker build -t [DOCKER_IMAGE]:[DOCKER_IMAGE_TAG] . 

# To start the application (or to restart after making changes to the source code)

docker run -d --name [DOCKER_CONTAINER_NAME] --user 1000  -v ~/[FOLDER_ON_HOST]:/usr/src/app/public -p 3000:3000 --net [CONTAINER_NETWORK_NAME] [DOCKER_IMAGE] 

```

To view the app, find your docker ip address + port 3000 ( this will typically be http://localhost:3000/ ).  To use a port other than 3000, you would need to modify the port in app.js, Dockerfile and docker-compose.yml.

Test Driven Development
----
This project uses test driven development, which a practice of writting tests before writting the actual code. This boilerplate uses **Mocha** and **Chai** as the tesf framework and assertion libraries respectively. To test APIs the boilerplate uses **SuperTest** an HTTP Server testing library. Sample tests can be found in the tests folder.

Example of a Unit provided:

```javascript

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

```

An example of an intergration test is provided:

```javascript
import request from 'supertest';
import server from '../../src/app';
import userCollection from '../../src/models/user';
import {
  expect
} from 'chai';


describe(" USER TESTS", () => {
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
    expect(response.header['x-auth-token']).to.not.be.empty
    expect(response.body.message).to.contain('User created');
  })


  it("/api/v1/useR/login user logged in successfully.", async () => {
    let data = {
      "email": "dummy@gmail.com",
      "password": "password67646e5"
    }
    const response = await request(server).post('/api/v1/users/login').send(data).set('Accept', 'application/json')
    expect(response.status).to.equal(200);
    expect(response.header['x-auth-token']).to.be.not.null
    expect(response.body.message).to.contain('User logged');
  })


  it('/api/v1/users/ returns all the users in the system',async()=>{
    const response= await request(server).get('/api/v1/users/');
    expect(response.status).to.be.equal(200);

  })

})
```
Deployment
----------

Once you are ready to deploy your app, you will need to create an account with
a cloud platform to host it. These are not the only choices, but currently BongoHive Consult uses AWS to host applications. Before we can focus much on the deployment, let's introduce the topic of continous deployment and continous deployment.


Continous Intergation and Continous Deployment
------------
**Continuous integration** is a coding philosophy and set of practices that drive development teams to implement small changes and check in code to version control repositories frequently.

**Continuous delivery** picks up where continuous integration ends. CD automates the delivery of applications to selected infrastructure environments. 

**Jenkins** offers a simple way to set up a continuous integration or continuous delivery environment for almost any combination of languages and source code repositories using pipelines, as well as automating other routine development tasks.



- [Jenkins Blue Ocean installation](https://jenkins.io/doc/book/blueocean/getting-started/)

- [Creating Jenkins Pipeline](https://jenkins.io/doc/book/blueocean/creating-pipelines/)

Sample Jenkins pipeline  :

```
pipeline {
  agent any
  
  stages {
    stage('Build..') {
      steps {
        sh 'yarn install'
      }
    }
    stage('Test') {
      steps {
        sh 'yarn test'
      }
    }
    stage('Staging') {
        when { branch 'staging' }
      steps {
      
        sh './jenkins_script/staging.sh'
      }
    }

    stage('Production') {
        when { branch 'master' }
      steps {
      
        sh './jenkins_scripts/production.sh'
      }
    }
  }
  environment {
    CI = 'true'
  }
}
```
This file has all the steps that the Jenkins build server needs to know to test and deploy the application. To understand more on how the pipeline file syntax read this article: [Pipeline Syntax](https://jenkins.io/doc/book/pipeline/syntax/)

Connecting Jenkins to Github
----
Connecting Jenkins to Github is quiet easy.  

1. Login in to Jenkins server and open the Blue ocean UI. 
2. Click create pipeline, and choose Github has the source of the code. At this point Jenkins will require that you provide the personal access token from Github.
3. Go to Github and under your account settings you will find the access tokens feature. Click create access token and copy the token provided.
4. Go back to Jenkins and paste the token in the dialog input. At this point Jenkins is now connected to your Github and you will be asked which repository to add the Jenkins build list.

Note: You will only need to do this once.

Connecting Jenkins to Deployment
---
For Jenkins to connect to the either the staging server or production server. A couple of things have to happen.

- For the Jenkins server to ssh into any other server, it has to be given access to it by adding the public key to the remote server's **authorized_keys**  file.  To do so  ssh into the Jenkins server using the following commands. 

  1. Login into Jenkins Server :   `` ssh -i NAME_OF_PEM_FILE  ubuntu@SERVER_IP_ADDRESS  
  ``
  2. Switch from ubuntu to Jenkins user: ``su jenkins``
  3. cd into .ssh  folder: ``cd .ssh/`` 
  4. Create ssh key for jenkins user if it doesn't exist: ``ssh-keygen``. Accept the default filename and location by pressing **ENTER** and don't add any phrase when asked just leave it blank.This will create the public key file *id_rsa.pub*  in .ssh folder. 
  5. Copy the key's content by running : ``sudo cat id_rsa.pub`` and you are done with the first part. 
  6.  Login into your staging server or production server:  `` ssh -i NAME_OF_PEM_FILE  ubuntu@SERVER_IP_ADDRESS `` 
  7. cd into the server's .ssh folder : ``cd .ssh/``
  8.  Open the *authorized_keys*  using the command: ``sudo nano authorized_keys``
  9. After opening the *authorized_keys* file, goto a new line if not empty and paste the jenkins ssh key content copied in step 5.  After this save new changes using cltrl+O and exit the file.
  10.  To test that jenkins can log into the remote staging/production server repeat step 1 and 2. 
  11.  Under the jenkins user ssh into the remote staging/production server using the following command: ``ssh ubuntu@SERVER_IP_ADDRESS``. If successful you will be login into the server.  This means that jenkins can login and run the commands in the jenkins_scripts bash scripts. 
   
 

Deploying on a Staging Server 
---
The following are the commands used to deploy an application using Jenkins on a staging server.
```
#!/bin/bash

# SSH into staging or production server.

ssh -t -o StrictHostKeyChecking=no  [SERVER_SSH_CREDENTIALS e.g ubuntu@IP_ADDRESS  << EOF
# change directory 
cd /opt/srv/

# remove current repository folder
rm -rf [FOLDER_NAME]

#clone the repository
git clone git@github.com:BongoHive/[REPOSITORY_NAME].git [FOLDER_NAME] 

# change directory to new cloned folder
cd [FOLDER_NAME] 

# change from master to staging branch
git checkout staging

# Build Docker image from Dockerfile in folder
docker build -t [DOCKER_IMAGE]:[DOCKER_IMAGE_TAG] . 
# Remove the currently running container if any.
docker container rm -f [CURRENT_RUNNING_DOCKER_CONTAINER] || true 
# Create a new container from new image
docker run -d --name [DOCKER_CONTAINER_NAME] --user 1000  -v ~/[FOLDER_ON_HOST]:/usr/src/app/public -p 3000:3000 --net [CONTAINER_NETWORK_NAME] [DOCKER_IMAGE] 

EOF >>
```
----


Deploying on a Production Server 
---
The following are the commands used to deploy an application using Jenkins on a production server.
```
#!/bin/bash

# SSH into staging or production server.

ssh -t -o StrictHostKeyChecking=no  [SERVER_SSH_CREDENTIALS e.g ubuntu@IP_ADDRESS]  << EOF
# change directory 
cd /opt/srv/

# remove current repository folder
rm -rf [FOLDER_NAME]

#clone the repository
git clone git@github.com:BongoHive/[REPOSITORY_NAME].git [FOLDER_NAME] 

# change directory to new cloned folder
cd [FOLDER_NAME] 

# Build Docker image from Dockerfile in folder
docker build -t [DOCKER_IMAGE]:[DOCKER_IMAGE_TAG] . 
# Remove the currently running container if any.
docker container rm -f [CURRENT_RUNNING_DOCKER_CONTAINER] || true 
# Create a new container from new image
docker run -d --name [DOCKER_CONTAINER_NAME] --user 1000  -v ~/[FOLDER_ON_HOST]:/usr/src/app/public -p 3000:3000 --net [CONTAINER_NETWORK_NAME] [DOCKER_IMAGE] 

EOF >>
```
----




**AMAZON ECS Instance Setup**

To deploy the application you need to make sure that that the following are available. 

- AWS EC2 instance
- Docker Engine: The application will run in a docker container.
- MongoDB Docker Image: This image will be used to create docker containers running the MongoDB database.







Changelog
---------

<!-- You can find the changelog for the project in: [CHANGELOG.md](https://github.com/sahat/hackathon-starter/blob/master/CHANGELOG.md) -->


Contributing
------------

If something is unclear, confusing, or needs to be refactored, please let me know.
Pull requests are always welcome, but due to the opinionated nature of this
project, I cannot accept every pull request. Please open an issue before
submitting a pull request. This project uses
[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) with a
few minor exceptions. If you are submitting a pull request that involves
Pug templates, please make sure you are using *spaces*, not tabs.

License
-------

The MIT License (MIT)

Copyright (c) 2014-2019 Sahat Yalkabov

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.