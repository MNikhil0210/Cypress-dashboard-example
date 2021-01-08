# Getting the node base image for node build
FROM node AS build

# Changing the Working Directory
WORKDIR /app

# Copying the required files to container
COPY package.json /app/
COPY yarn.lock /app/

# Installing the dependencies
RUN yarn add cypress --dev
RUN yarn add save-dev start-server-and-test
RUN apt-get update -y
RUN apt-get install -y libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb
RUN yarn install

COPY ./ /app/

# Building the Application
RUN yarn build ; exit 0
CMD [ "yarn", "cypress-test" ]
