FROM node:12-slim

WORKDIR /rokket-api
ENV PATH /rokket-api/node_modules/.bin:$PATH
ADD package.json yarn.lock .env ./

RUN yarn install
COPY . /rokket-api

EXPOSE ${API_PORT}
CMD ["yarn", "start"]
