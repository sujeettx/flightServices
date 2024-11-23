# Welcome to Flights Services

## Project Setup
  - clone the Project on your local .
  - Execute `npm install` on the same path as of your root directory of tech 
  downloaaded project from github .
  - Create a new file called `.env` in the root directory of your project and add the following line to it
  `PORT=3000` . 
  - inside the src folder create a new folder called `config` and inside that folder create a new file called `config.json` and then add the following peice of json

```
  {

  "development": {
    "username": ""your_db_username",
    "password": "<your_db_password>",
    "database": "Flight_SearchDB",
    "host": "127.0.0.1",
    "dialect": "mysql"
   } 
 }

```
- once yoo've added your db config as listed above , and go to src folder by your terminal and run the following command to create the database and the tables in it `npx sequelize db:create`