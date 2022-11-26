cd web-app
mvn package
cp -r target/web-app.war /usr/local/tomcat/webapps/
/usr/local/tomcat/bin/startup.sh
tail -f /dev/null
