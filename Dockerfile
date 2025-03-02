# Use an official Node.js runtime as the base image
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first (for better caching)
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --frozen-lockfile

# Copy the rest of the project files
COPY . . 

# Build the React app
RUN npm run build

# Use a lightweight web server for serving the React app
FROM nginx:alpine

# Remove default Nginx index.html (to prevent conflicts)
RUN rm -rf /usr/share/nginx/html/*

# Copy the built React app to the Nginx HTML folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 for the container
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
