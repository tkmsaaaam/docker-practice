FROM nginx:latest
EXPOSE 3030
COPY html /usr/src/app
COPY .htpasswd /usr/local/etc/conf.d/.htpasswd
COPY included.conf /usr/local/etc/nginx/conf.d/included.conf
COPY default.conf /etc/nginx/conf.d/default.conf
