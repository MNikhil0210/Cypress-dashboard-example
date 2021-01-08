# Getting the node base image for node build
FROM node AS build

# Changing the Working Directory
WORKDIR /app

# Copying the required files to container
COPY package.json /app/
COPY yarn.lock /app/

# Installing the dependencies
RUN yarn add cypress --dev
RUN yarn install

COPY ./ /app/

# Building the Application
RUN yarn build ; exit 0
CMD [ "yarn", "start" ]
