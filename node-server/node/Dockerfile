FROM node:latest
WORKDIR /usr/src/app
COPY / .
EXPOSE 3000
RUN ["bash", "-c", "npm install"]
CMD ["bash", "-c", "node src/app.js"]
