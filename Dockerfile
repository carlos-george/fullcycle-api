### STAGE 1: build-stage-1 ###
FROM node:alpine as build-stage-1

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run build

FROM node:alpine
WORKDIR /app
COPY --from=build-stage-1 /app ./
EXPOSE 3000
CMD ["npm", "run", "start:prod"]
