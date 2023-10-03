FROM node:18

COPY package*.json .

RUN npm ci

COPY ./auth .

ENV PORT 3000

EXPOSE ${PORT}

RUN npm run build

CMD [ "npm", "start" ]