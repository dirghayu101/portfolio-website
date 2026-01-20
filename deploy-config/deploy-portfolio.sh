#!/bin/bash
set -e
COMPOSE_PATH="./docker-compose.yml"
docker compose -f $COMPOSE_PATH up -d --build --wait
# Remove all stopped containers
docker container prune --force
# Remove all unused images (not referenced by any container)
docker image prune --all --force
# Remove unused networks
docker network prune --force
# Optionally, remove build cache
docker builder prune --all --force
