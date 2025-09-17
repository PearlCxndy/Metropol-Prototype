# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

RUN apk add --no-cache \
    libc6-compat \
    build-base

# Copy package.json and pnpm-lock.yaml
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the port the app runs on
EXPOSE 8080

CMD ["node", "build/src/main.js"]