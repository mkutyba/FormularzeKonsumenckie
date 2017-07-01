FROM node:6

RUN npm install -g yarn

CMD yarn install && yarn start
