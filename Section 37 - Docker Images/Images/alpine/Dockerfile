ARG ALPINE_VERSION=3.19

FROM alpine:${ALPINE_VERSION}

LABEL DESENVOLVEDOR="Argus Academy"

ENV HOST="0.0.0.0"

RUN apk add --no-cache nodejs
RUN apk add --no-cache npm
RUN apk add --no-cache git
RUN apk add --no-cache wget

WORKDIR /opt/

ENTRYPOINT [ "node" ]

CMD [ "--version" ]