# Because our app is build with node, we select the node image parent and we specify the version
FROM node:16.15.1

# Install nodemon globally in the container
RUN npm i -g nodemon

# We specify the working directory where all of the below commands are going to be executed
WORKDIR /app

# We copy all of our local files inside the /app folder that will be created with the container
COPY . .

# We specify the command to install our app dependencies
RUN npm i

# We specify which port we want to expose from the container
EXPOSE 3000

# Finally, we specify the command to run the app
CMD [ "npm", "run", "dev" ]