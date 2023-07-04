# Use the official Node.js image as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the server code to the container
COPY server.js ./

# Expose the port your server will be listening on
EXPOSE 5000

# Set the command to run your server
CMD ["node", "server.js"]