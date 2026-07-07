FROM alpine:3.19.0

RUN <<EOF
    apk add --no-cache nodejs
    apk add --no-cache npm
    apk add --no-cache git
EOF


LABEL desenvolvedor="Gabriel Company"
LABEL descricao="Imagem criada para exemplificar utilização de Labels no Dockerfile."
LABEL versao="1.0"
LABEL contato="+55 11 4002-8922"

# Daria pra fazer tudo em uma única linha com um único LABEL
# LABEL desenvolvedor="Gabriel Company" versao="1.0" contato="+55 11 4002-8922" etc...

# Também é possível  fazer utilizando múltiplas linhas colocando barras no final
# desenvolvedor="Gabriel Company" \
# versao="1.0" \ 
# e etc...