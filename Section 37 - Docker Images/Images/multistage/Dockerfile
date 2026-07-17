FROM ubuntu as build

RUN apt update && apt install build-essential -y

RUN mkdir /opt/app/

WORKDIR /opt/app/

COPY Main.c .
# /opt/app/Main.c

RUN gcc ./Main.c -static -o Main

FROM scratch as prd

COPY --from=build /opt/app/Main /Main

CMD ["./Main"]