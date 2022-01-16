FROM node:lts-buster-slim

WORKDIR /app

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm ci

COPY . .

ENV NODE_ENV production
ARG NEXT_PUBLIC_PLAUSIBLE_API_HOST=
ARG NEXT_PUBLIC_PLAUSIBLE_DOMAIN=

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]