FROM node:latest
WORKDIR /usr/src/app
COPY ./node .
RUN ["bash", "-c", "npm i"]
CMD ["bash", "-c", "node src/app.js"]
