FROM node:argon
MAINTAINER Vijaya Kumar "batvi03@ca.com"

EXPOSE 8181


RUN mkdir -p /usr/share/learning
WORKDIR /usr/share/learning
COPY . /usr/share/learning
RUN npm install
RUN npm install kafka-node
# Bundle app source

CMD [ "node", "index.js" ]
