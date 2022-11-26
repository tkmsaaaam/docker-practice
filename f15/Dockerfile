FROM tomcat:9-jdk8-corretto
RUN yum update && yum install -y maven
COPY eagle /usr/local/tomcat
COPY maven.sh /usr/local/tomcat
CMD [ "sh", "maven.sh" ]
