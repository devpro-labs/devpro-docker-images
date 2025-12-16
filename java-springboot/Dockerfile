FROM maven:3.9.6-amazoncorretto-17

# Working directory for mounted project
WORKDIR /app

# Keep Maven dependencies cached (improves speed 10x)
VOLUME /root/.m2

EXPOSE 8080

CMD ["tail", "-f", "/dev/null"]
