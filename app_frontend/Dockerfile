# build environment
FROM node:12.13.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ENV GATSBY_TELEMETRY_DISABLED 1
COPY package.json /app/package.json
RUN npm install npm@latest -g && npm install --silent
COPY . /app
RUN gatsby build

# production environment
FROM nginx:1.17.6
COPY --from=build /app/public /usr/share/nginx/html
COPY nginx.conf.template /etc/nginx/nginx.conf.template
EXPOSE 80
CMD /bin/bash -c "envsubst < /etc/nginx/nginx.conf.template > /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"
