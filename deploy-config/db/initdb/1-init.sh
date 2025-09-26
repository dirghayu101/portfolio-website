#!/bin/bash

# Check if envsubst is installed
if ! command -v envsubst &> /dev/null; then
  echo "envsubst not found."
  exit 1
fi

# Use a temporary file to avoid overwriting the input while reading it
envsubst < /docker-entrypoint-initdb.d/2-init.sql > /docker-entrypoint-initdb.d/2-init-substituted.sql

rm 2-init.sql

# Replace the original file after substitution
mv /docker-entrypoint-initdb.d/2-init-substituted.sql /docker-entrypoint-initdb.d/2-init.sql

echo "Environment variables substituted in 2-init.sql"