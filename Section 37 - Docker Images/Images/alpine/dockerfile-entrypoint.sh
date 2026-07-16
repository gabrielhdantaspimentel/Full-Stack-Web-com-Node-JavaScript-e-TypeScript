#!/bin/sh

echo "iniciando o container"

for i in 1 2 3 4 5; do
    echo "Contador: $i"
done

echo "Processos realizados, serviço em execução"

echo "Iniciando o processos de 5 segundos"

sleep 5s

echo "5 segundos depois"

COPY ./dockerfile-entrypoint.sh dest