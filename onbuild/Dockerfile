FROM ubuntu:22.10 as parentimage
ONBUILD RUN echo run command from parent image
FROM parentimage
RUN echo run command by RUN from child image
CMD ["sh", "-c", "echo run command by CMD from child image" ]
