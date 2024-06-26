FROM node
WORKDIR /daily-prng
COPY package.json .
COPY npm-shrinkwrap.json .
RUN npm config set maxsockets 1
RUN npm install
RUN npm audit --audit-level=critical

COPY . .
RUN npm run build

FROM nginx
COPY --from=0 daily-prng/docs /usr/share/nginx/html
