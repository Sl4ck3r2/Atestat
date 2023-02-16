# Description

Well... Basically it is a simple project created using `create-react-app`.

# Backend

1. Run `npm install` to install the packages
2. Run `nodemon server.js` to start the backend
3. You **must** create an .env file as in the example .env.example where `REACT_DATABASE_PASSWORD` represents the password from the PostgresSQL database, and `TOKEN_KEY` represents the key after which the token will be encrypted after logging in. Both variables will want to be of string type.

# Frontend

1. Run `npm install, antd` to install the packages and antd
2. Run `npm start` to start the frontend

# Some notes

Don't forget that the project uses swagger, it can be found on the route `localhost:3001/api/swagger`
