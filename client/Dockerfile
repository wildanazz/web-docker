FROM node:16.3.0-alpine
WORKDIR /home/node/app
COPY package*.json ./
RUN npm install
RUN chown -R node:node node_modules
COPY ./ ./
USER node
RUN npm run build

FROM nginx
EXPOSE 80
COPY --from=0 /home/node/app/build /usr/share/nginx/html