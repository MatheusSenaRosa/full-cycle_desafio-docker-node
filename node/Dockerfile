FROM node

WORKDIR /app

ENV DOCKERIZE_VERSION='v0.7.0'

RUN apt-get update \
    && apt-get install -y wget \
    && wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin \
    && apt-get autoremove -yqq --purge wget && rm -rf /var/lib/apt/lists/*

COPY . .

EXPOSE 3000

ENTRYPOINT [ "./docker-entrypoint.sh" ]

CMD [ "node", "./index.js" ]