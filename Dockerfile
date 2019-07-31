FROM mhart/alpine-node:10
LABEL maintainer="BongoHive Consult"
# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
CMD [ "yarn", "run", "serve" ]
# Create a dedicated user
RUN apk add --no-cache make gcc g++ python
RUN npm install -g yarn

RUN addgroup -S nodejs && adduser -S -g nodejs nodejs
# Install app dependencies
COPY package.json /usr/src/app/


RUN yarn install
# Bundle app source

COPY . /usr/src/app
# Build the built version
RUN yarn run build
# Remove dev packages
RUN yarn install --production
# Use node user
USER nodejs

EXPOSE 3000

