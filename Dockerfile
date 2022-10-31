FROM node:14.19-alpine


WORKDIR /app
COPY package*.json ./
COPY yarn.lock ./
RUN yarn
COPY . .

RUN yarn build

EXPOSE 80

ENV NUXT_HOST=0.0.0.0

ENV NUXT_PORT=80

CMD [ "yarn", "start" ]

