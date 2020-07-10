require("dotenv").config();

const DB_HOST = process.env.ROKKET_DB_HOST || "localhost";
const DB_PORT = process.env.ROKKET_DB_PORT || 2717;
export const DB_URL = `mongodb://${DB_HOST}:${DB_PORT}/books`;
