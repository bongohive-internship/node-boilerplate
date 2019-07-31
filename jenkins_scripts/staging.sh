#!/bin/bash

# SSH into staging or production server.

ssh -t -o StrictHostKeyChecking=no  [SERVER_SSH_CREDENTIALS e.g ubuntu@IP_ADDRESS]  << EOF
cd /opt/srv/
rm -rf [FOLDER_NAME]
git clone git@github.com:BongoHive/[REPOSITORY_NAME].git [FOLDER_NAME] 
cd [FOLDER_NAME] 
git checkout staging
docker build -t [DOCKER_IMAGE]:[DOCKER_IMAGE_TAG] . 
docker container rm -f [CURRENT_RUNNING_DOCKER_CONTAINER] || true 
docker run -d --name [DOCKER_CONTAINER_NAME] --user 1000  -v ~/[FOLDER_ON_HOST]:/usr/src/app/public -p 3000:3000 --net [CONTAINER_NETWORK_NAME] [DOCKER_IMAGE] 

EOF >>
