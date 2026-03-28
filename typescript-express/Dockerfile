FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json* ./

# Install deps + types
RUN npm install && \
    npm install --save-dev @types/pg @types/cookie-parser @types/cors @types/jsonwebtoken

COPY . .

# Build TypeScript
RUN npx tsc

ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "dist/index.js"]