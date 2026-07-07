FROM alpine:3.19.0

ENV DESENVOLVEDOR="Gabriel Company"

RUN <<EOF
    apk add --no-cache nodejs
    apk add --no-cache npm
    apk add --no-cache git
    apk add --no-cache nano
EOF
# Nano é um editor de texto via Shell

      # Puxando valr da configuração da ENV que está embaixo de FROM
LABEL desenvolvedor=${DESENVOLVEDOR} \
    descricao="Imagem criada para exemplificar utilização de Labels no Dockerfile." \
    versao="1.0" \
    contato="+55 11 4002-8922"

# Não pode haver espaço entre a variável, o sinal de igual, e o valor!
# ENV FRONT_PRD="https://meuapp.com.br"
# ENV BACK_PRD="https://meuapp.com.br:3002"

# Sintaxe alternativa sem o "="
ENV FRONT_PRD "https://meuapp.com.br"
ENV BACK_PRD "https://meuapp.com.br:3002"
ENV VERSAO "1.0.1"

# Multiplas linahs
ENV FRONT_PRD="https://meuapp.com.br" \
    BACK_PRD="https://meuapp.com.br:3002" \
    VERSAO="1.0.1" \
    DESENVOLVEDOR="Gabriel Company"

ENV MSG "Variável de ambiente criada no Dockerfile"
RUN echo ${MSG} > /tmp/arquivo_criado_durante_o_build_da_imagem.txt