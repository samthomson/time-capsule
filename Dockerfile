FROM node:9.3.0

# within the docker container the project will be placed here
WORKDIR /timecapsule/

CMD yarn && yarn run build