# Use an official Node.js runtime as the base image
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy the rest of the project files
COPY . . 

# Build the React app
RUN npm run build

# Debug: Check if `dist/` exists before copying
RUN ls -lah /app/dist && du -sh /app/dist

# Production stage: Use Nginx to serve the built files
FROM nginx:alpine

# Set working directory in Nginx container
WORKDIR /usr/share/nginx/html

# Remove default Nginx index.html (to prevent conflicts)
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from `build` stage
COPY --from=build /app/dist /usr/share/nginx/html

# Debug: Check if files exist after copying
RUN ls -lah /usr/share/nginx/html && du -sh /usr/share/nginx/html

# Expose port 80 for Nginx
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
