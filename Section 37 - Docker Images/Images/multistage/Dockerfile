FROM ubuntu AS build

RUN apt update && apt install build-essential -y

RUN mkdir /opt/app/

WORKDIR /opt/app/

COPY Main.c .
# /opt/app/Main.c

RUN gcc ./Main.c -static -o Main

FROM alpine AS prd

COPY --from=build /opt/app/Main /opt/app/Main

FROM prd AS run

CMD ["/opt/app/Main"]