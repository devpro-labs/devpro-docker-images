FROM node:20-alpine

WORKDIR /tmp
COPY package*.json ./
RUN npm install --silent

RUN mv node_modules /node_modules

RUN npm install -g typescript ts-node @types/express @types/node --silent

WORKDIR /app

# Auto-link so Node resolves modules without needing exec commands
RUN ln -s /node_modules /app/node_modules

ENV NODE_PATH=/node_modules
ENV TS_NODE_TRANSPILE_ONLY=true

EXPOSE 3000
CMD ["tail", "-f", "/dev/null"]
