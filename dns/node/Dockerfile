FROM node:latest
WORKDIR /usr/src/app
COPY app .
RUN ["bash", "-c", "npm i"]
CMD ["bash", "-c", "node src/app.js"]
