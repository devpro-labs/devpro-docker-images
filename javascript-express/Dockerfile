FROM node:20-alpine

RUN npm install -g \
    express \
    tsx \
    typescript \
    ts-node \
    @types/node \
    @types/express

# Make global libs resolvable by Node
ENV NODE_PATH="/usr/local/lib/node_modules"
ENV PATH="$PATH:/usr/local/bin"

WORKDIR /runtime

# runtime node_modules is same as global node_modules
RUN ln -s /usr/local/lib/node_modules /runtime/node_modules

WORKDIR /app
RUN ln -s /usr/local/lib/node_modules /app/node_modules

EXPOSE 3000
CMD ["tail", "-f", "/dev/null"]
