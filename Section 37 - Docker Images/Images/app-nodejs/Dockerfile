# indica o caminho
FROM node:20.10.0-alpine

# copiando o server.js para dentro do diretorio /opt/...
# esse diretorio /opt/... é um diretorio padrão de linux
COPY server.js /opt/app-nodejs/


# Você "entrou" nessa pasta. A partir daqui, o Docker assume que você está trabalhando dentro dela.
WORKDIR /opt/app-nodejs/


# Executando o comando
# a lógica é 
# EXECUTAR COMANDO -> NESSE DIRETORIO -> NESSE ARQUIVO
CMD node /opt/app-nodejs/server.js