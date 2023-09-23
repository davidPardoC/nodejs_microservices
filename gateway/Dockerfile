FROM node:16.17.0

COPY package*.json .

RUN npm ci

COPY . .

ENV PORT 3000

EXPOSE ${PORT}

RUN npm run build

CMD [ "npm", "start" ]