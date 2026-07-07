FROM alpine:3.19.0

RUN <<EOF
    apk add --no-cache nodejs
    apk add --no-cache npm
    apk add --no-cache git
EOF


LABEL desenvolvedor="Gabriel Company" \
    descricao="Imagem criada para exemplificar utilização de Labels no Dockerfile." \
    versao="1.0" \
    contato="+55 11 4002-8922"

# Não pode haver espaço entre a variável, o sinal de igual, e o valor!
ENV FRONT_PRD="https://meuapp.com.br"
ENV BACK_PRD="https://meuapp.com.br:3002"
