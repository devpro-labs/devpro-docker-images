# Use lightweight Node image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Install only production deps first (better caching)
COPY package*.json ./

RUN npm install --production

# Copy application source
COPY . .

# Expose app port (internal, docker-network)
EXPOSE 3000

# Start Express app
CMD ["node", "index.js"]
