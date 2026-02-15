# ---------- Base Runtime ----------
FROM node:18-alpine

# Prevent npm extra noise
ENV NODE_ENV=production

# Create app directory
WORKDIR /app

# Copy only dependency manifest first (better layer caching)
COPY package.json package-lock.json* ./

# Install production dependencies only
RUN npm install --omit=dev

# Expose internal app port
EXPOSE 3000

# Default run command (user code mounted to /app/src)
CMD ["node", "src/index.js"]
