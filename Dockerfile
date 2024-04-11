# Use an official Node.js runtime as a parent image
FROM node:18 as build

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Angular CLI and project dependencies
RUN npm install -g @angular/cli
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the Angular application
RUN ng build 

# Copy the Configurations of Nginx to point on Project
COPY cement-app-web.conf /app/dist

# Use an official Nginx runtime as the final image
FROM nginx:alpine

# Copy the Angular build artifacts to the Nginx web server's root directory
COPY --from=build /app/dist/ /usr/share/nginx/html
COPY --from=build /app/dist/cement-app-web.conf /etc/nginx/conf.d/cement-app-web.conf

# Expose port 8080
EXPOSE 8080

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
