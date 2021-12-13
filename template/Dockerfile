FROM node:lts-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "/app/"]

RUN npm install --production

COPY . /app

CMD ["npm", "start"]