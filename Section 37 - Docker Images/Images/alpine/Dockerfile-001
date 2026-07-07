FROM alpine:3.19.0

# Instalando dependências no SO

# RUN apk add --no-cache nodejs
# RUN apk add --no-cache npm
# RUN apk add --no-cache git 

# RUN multilinha
# RUN apk add --no-cache nodejs && \
#     apk add --no-cache npm && \
#     apk add --no-cache npm

# EOF = END OF FILE
# Será lido tudo dentro dos dois EOF
RUN <<EOF
    apk add --no-cache nodejs
    apk add --no-cache npm
    apk add --no-cache npm
EOF