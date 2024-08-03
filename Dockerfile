# Use the official Node.js image.
# https://hub.docker.com/_/node
# Replace 'current-slim' with a specific version if needed (e.g., '16-slim' or '18-slim').
FROM node:current-slim

# Install CA certificates to ensure SSL works properly
RUN apt-get update && apt-get install -y \
    ca-certificates \
    && update-ca-certificates

# Create and change to the app directory.
WORKDIR /app

# Copy application dependency manifests to the container image.
# A wildcard is used to ensure both package.json AND package-lock.json are copied.
# Copying this separately prevents re-running npm install on every code change.
COPY package*.json ./

# Install production dependencies.
RUN npm install

# Copy local code to the container image.
COPY . .

# Build the Next.js application
RUN npm run build

EXPOSE 3000

# Run the web service on container startup.
CMD ["npm", "start"]
