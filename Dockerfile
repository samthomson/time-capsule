FROM node:9.3.0
RUN yarn global add npm

# within the docker container the project will be placed here
WORKDIR /usr/src/time-capsule

# install all deps
RUN yarn

# build typescript into javascript
RUN yarn run build