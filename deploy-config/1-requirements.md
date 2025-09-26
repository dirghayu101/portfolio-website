# Here are my database related requirements

1. A docker file that initializes the postgres database. Version should be stable long term support and something I shouldn't be thinking about for a long while once it's setup.
2. Database initialization: create a schema where my prisma will be performing CRUD operation. Prisma should have access to only that particular schema, I would wanna use different schemas of this postgres for other projects. A custom user that prisma can use to interact with this schema.

In conclusion I need a docker file and a initialization script which setup a prisma user with those privileges. Also I will create an admin user that I can later use to create more schema and user based on custom projects that I will be doing.
