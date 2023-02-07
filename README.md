# service-vehicle-sales

# Getting Started with Postgres

To setup the database follow the instructions with the README inside postgres folder

# Getting Started with Node.js

This guide will walk you through the steps of installing Node.js using the Node Version Manager (nvm) and setting up a basic project using npm.

## 1. Installing Node.js with NVM

Follow these steps to install Node.js locally on your Ubuntu 20.04 machine:

1. Install NVM by running the following command in your terminal:
```bash
sudo curl -o- [https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh](https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh) | bash
```
2. Source the NVM configuration by running:
```bash
source ~/.bashrc
```
3. Install the desired version of Node.js, in  this  case version 19.5.0, by running:
```bash
nvm install v19.5.0
```
## 2. Use the Correct Node.js Version 

To use version 19.5.0  for your project, run:
```bash
nvm use v19.5.0
```
## 3. Initialize Your Project 

To start your project, run:
```bash
npm init
```

## 4. Install Dependencies

Install the following dependencies for your project:

```bash
npm install express jsonwebtoken bcrypt pg
```


## 5. Start the Server

Start the server on port 3000 by running the following command:
```bash
npm index.js
```

The server can now be accessed at `http://localhost:3000/api`.
