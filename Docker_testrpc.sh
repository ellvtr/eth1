FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

RUN npm install -g ethereumjs-testrpc

EXPOSE 8545
CMD [ "testrpc" ]
