FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# RUN apk add git

# Install app dependencies
# For npm@5 or later, copy package-lock.json as well
# COPY package*.json ./
# RUN npm install

RUN mkdir node_modules
COPY ./node_modules ./node_modules
COPY ./favicon.ico .
COPY ./index.html .
COPY ./serv.sh .
# RUN ls ./

EXPOSE 8080
CMD [ "sh", "serv.sh" ]
