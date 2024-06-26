#!/bin/sh

echo "Docker-Entrypoint iniciado"

npm install

echo "Docker-Entrypoint finalizado"

exec "$@"