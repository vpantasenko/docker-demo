FROM node:8.11.1-alpine
ENV NODE_ENV development
WORKDIR /app
COPY package.json .
RUN yarn install
EXPOSE 3000
CMD ["yarn", "start"]
