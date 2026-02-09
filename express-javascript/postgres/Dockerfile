FROM express-js-base

# Create prisma directory inside container
RUN mkdir -p prisma

# Copy schema.prisma into prisma folder
COPY schema.prisma ./prisma/schema.prisma

# Install Prisma
RUN npm install prisma @prisma/client

# Generate Prisma client
RUN npx prisma generate

CMD ["node", "index.js"]
