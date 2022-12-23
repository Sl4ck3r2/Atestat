require('dotenv').config();

const axios = require('axios');
const path = require('path');
const fs = require('fs');

const BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;
const SWAGGER_FILE_PATH = 'swagger-docs/swagger.json';
const OPEN_API_SAVE_PATH = path.join(__dirname, 'swagger.json');

const callback = (err) => {
  if (err) {
    console.error('Error on saving types');
    process.exit(1);
  }
};

const main = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/${SWAGGER_FILE_PATH}`);
    const data = JSON.stringify(response.data, null, 2);
    fs.writeFile(OPEN_API_SAVE_PATH, data, callback);
  } catch (e) {
    console.log('Error on downloading api');
    console.error(e);
    process.exit(1);
  }
};

main();
