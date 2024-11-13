FROM alpine:latest

COPY pocketbase /usr/local/bin/pocketbase
COPY pb_hooks /pb_hooks
COPY pb_migrations /pb_migrations

EXPOSE 8080

CMD ["/usr/local/bin/pocketbase", "serve", "--http=0.0.0.0:8080"]