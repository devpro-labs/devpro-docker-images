FROM express-js-base

COPY package*.json ./
RUN npm install node-redis

CMD ["node", "index.js"]