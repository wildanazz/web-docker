FROM node:16.3.0-alpine as build
WORKDIR /home/node/app
COPY package.json package.json
RUN npm install
RUN chown -R node:node node_modules
COPY . .
USER node
CMD [ "npm", "run", "build"]

FROM nginx
EXPOSE 80
COPY --from=build /home/node/app/build /usr/share/nginx/html