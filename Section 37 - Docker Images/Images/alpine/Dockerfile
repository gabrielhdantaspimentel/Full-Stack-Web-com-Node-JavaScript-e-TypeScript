ARG ALPINE_VERSION=3.17

#FROM alpine:3.19.0
FROM alpine:${ALPINE_VERSION}

ENV DESENVOLVEDOR="Gabriel Company"

RUN <<EOF
    apk add --no-cache nodejs
    apk add --no-cache npm
    apk add --no-cache git
    apk add --no-cache nano
EOF

# Adiciona um usuário no SO (Linux distro Alpine)
RUN adduser -D gabriel

# Define o usuário responsável pela execução dos próximos RUNs
USER gabriel

LABEL desenvolvedor=${DESENVOLVEDOR} \
    descricao="Imagem criada para exemplificar utilização de Labels no Dockerfile." \
    versao="1.0" \
    contato="+55 11 4002-8922"

# Multiplas linahs
ARG FRONT_PRD="https://meuapp.com.br"
ARG BACK_PRD="https://meuapp.com.br:3002"

ENV BACK_PRD="https://meuapp.com.br:3000"

ENV FRONT_PRD=${FRONT_PRD} \
    BACK_PRD=${BACK_PRD} \
    VERSAO="1.0.1" 

ENV MSG "Variável de ambiente criada no Dockerfile"
RUN echo ${MSG} > /tmp/arquivo_criado_durante_o_build_da_imagem.txt

# Cada Dockerfile possui apenas um único CMD
CMD ["/bin/sh", "-c", "echo Comando executado automaticamente quando o container é iniciado"]