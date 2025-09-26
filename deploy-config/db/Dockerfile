# Use official Postgres image
FROM postgres:16

# Install envsubst (which is part of the GNU `gettext` package)
# Helps in substituting env values in our scripts files.
RUN apt-get update && apt-get install -y gettext-base

# The files in the docker-entrypoint-initdb.d run in an alphabetically order when database is initialized.
COPY ./initdb /docker-entrypoint-initdb.d/

# Permission to read/write/execute for all users. This is required for the scripts to be executed when the container starts. Docker copies files with root user permission.
RUN chmod -R 777 /docker-entrypoint-initdb.d/