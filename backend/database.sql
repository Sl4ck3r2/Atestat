CREATE DATABASE login_data_base;
CREATE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    firstName TEXT,
    lastName TEXT,
    email TEXT,
    password TEXT,
)