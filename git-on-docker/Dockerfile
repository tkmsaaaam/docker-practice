FROM ubuntu:22.10
WORKDIR /usr/local/bin
RUN apt-get update && apt-get install -y git
COPY ./git-credential-github-token /usr/local/bin
RUN git config --global url."https://github.com/".insteadOf ssh://git@github.com/ \
  && git config --global credential.helper github-token && git config --global http.sslVerify false
RUN chmod 744 git-credential-github-token
CMD ["bash", "-c", "git clone https://github.com/$OWNER_NAME/$REPO_NAME --depth 1 && cd $REPO_NAME && git checkout -b $BRANCH_NAME"]
