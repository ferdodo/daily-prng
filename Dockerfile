FROM node AS build
WORKDIR /daily-prng
COPY package.json .
COPY npm-shrinkwrap.json .
RUN npm config set maxsockets 1
RUN npm install
RUN npm audit --audit-level=moderate

COPY . .
RUN npm run build

FROM node AS publish
WORKDIR /daily-prng
COPY --from=0 /daily-prng/package.json .
COPY --from=0 /daily-prng/npm-shrinkwrap.json .
COPY --from=0 /daily-prng/dist dist

FROM nginx AS docs
COPY --from=0 daily-prng/docs /usr/share/nginx/html
