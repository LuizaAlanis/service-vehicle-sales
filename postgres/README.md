# Postgres step by step

## 1) Install postgres locally with following commands on linux ubuntu 20.4

a) Clone the repository
```bash
git clone git@bitbucket.org:super-sim/api-collateral-as-a-service.git
```
b) Install wget and ca-certificates
```bash
sudo apt install wget ca-certificates
```
c) Add PostgreSQL's repository to your system
```bash
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
```
d) Add the repository to the list of sources for apt
```bash
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ $(lsb_release -cs)-pgdg main" >> /etc/apt/sources.list.d/pgdg.list'
```
e) Update your local package index with the contents of the repository
```bash
sudo apt update
```
f) Install PostgreSQL
```bash
sudo apt install postgresql postgresql-contrib
```
## 2) Check if active

a) Check the status of the PostgreSQL service
```bash
service postgresql status
```
## 3) Start server

a) Start the PostgreSQL server as the postgres user
```bash
sudo -u postgres psql
```
## 4) Connect to database

a) Get information about the current connection
```bash
\conninfo
```
b) Set the password for the postgres user to 123456
```bash
\password postgres
```
c) Create a new database named `vehicle_sales`
```sql
CREATE DATABASE vehicle_sales
```
d) Connect to the `vehicle_sales` database
```postgres
\c vehicle_sales
```
## 5) Create tables for this project

a) Create a table named `users` with columns `id`, `username`, and `password`
```sql
CREATE TABLE users (id SERIAL PRIMARY KEY, username VARCHAR, password VARCHAR);
```
b) Create a table named `vehicles` with columns `id`, `brand`, `model`, `value`, and `image`
```sql
CREATE TABLE vehicles (id SERIAL PRIMARY KEY, brand VARCHAR, model VARCHAR, image VARCHAR, price FLOAT);
```

## 6) Insert data to user table

a) Insert a row into the `users` table with the username `admin` and the password is 123456789 with bcrypt hash `$2a$12$OMoWVjsi.Gr7oPN8OyuPa.my./uVsi2K6W7NsXoS0wtcfAtAwVK2G` 
```sql
INSERT INTO users (username, password) VALUES ('admin', '$2a$12$OMoWVjsi.Gr7oPN8OyuPa.my./uVsi2K6W7NsXoS0wtcfAtAwVK2G');
```
## 7) Insert data to vehicles table
```sql
INSERT INTO vehicles (brand, model, image, price) VALUES ('VW', 'Polo', 'https://quatrorodas.abril.com.br/wp-content/uploads/2021/06/DB2021AU00471_medium-e1625065359538.jpg?quality=70&strip=info', 112000.0);
INSERT INTO vehicles (brand, model, image, price) VALUES ('VW', 'Virtus', 'https://quatrorodas.abril.com.br/wp-content/uploads/2023/02/Novo-Virtus-Exclusive.jpg?quality=70&strip=info', 144000.0);
```