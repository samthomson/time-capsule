FROM node:9.3.0
RUN yarn global add npm

# within the docker container the project will be placed here
# WORKDIR /usr/app

RUN yarn

RUN yarn run build