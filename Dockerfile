FROM node:9.3.0

# within the docker container the project will be placed here
WORKDIR /time-capsule

ADD . /time-capsule

RUN yarn global add npm

# install all deps
RUN yarn

# build typescript into javascript
RUN yarn run build