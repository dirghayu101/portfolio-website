# Docker Commands Used for reference

- In the config directory run: `docker compose up -d`.
- To login to the container: `docker exec -it my_postgres psql -U admin -d myapp_db`.
- To check schemas: `\dn`.
- To check users: `\du`.
- Other commands:

```bash
docker compose stop     # stop the container
docker compose start    # start again
docker compose down     # stop and remove container (keeps volume/data)
docker compose down -v  # stop and remove container + wipe all data

psql -U <username> -d <dbName>
docker compose down -v --rmi all 
docker compose build --no-cache && docker compose up -d

```

- Prisma related commands:

``` bash
# Tutorial ones:
npx prisma init
npx prisma db push
npx prisma studio   # GUI for interacting with database.

# GPT ones:
npx prisma db pull      # introspect schema
npx prisma migrate dev  # run migrations
```
