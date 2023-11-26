-- CREATE a new DB and user for DB -
CREATE USER crypto_mon WITH ENCRYPTED PASSWORD 'crypto_mon_pwd';
ALTER USER crypto_mon CREATEDB; -- ORM requires that the user has the right to create databases
CREATE DATABASE "crypto_mon_db" ENCODING UTF8;
GRANT ALL PRIVILEGES ON DATABASE "crypto_mon_db" TO crypto_mon;
