FROM node:14
# This image is used to dockerized the apollo server to be runned inside Fargate on AWS
RUN apt-get update

# add dumb-init to effciently catch container signals
RUN apt-get install dumb-init

WORKDIR /app
COPY --chown=node:node . .
# Avoid being root inside the container
USER node
RUN npm install
CMD ["dumb-init", "node", "apollo.js"]