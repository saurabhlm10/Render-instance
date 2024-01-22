# Use the official Node.js 16 image as a parent image
FROM node:16

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or npm-shrinkwrap.json)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the TypeScript source files and other necessary files
COPY . .

# TypeScript compilation
RUN npm run build

# Expose the port the app runs on
EXPOSE 7777

# Command to run the compiled app
CMD [ "npm", "start" ]
