import express from "express";
import morgan from "morgan";
import books from "./routes/books.routes";
import { API_PORT } from "./config/app.config";
import startDatabaseConnection from "./mongo/connection";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("[:status] :method\t:url"));

app.use("/books", books);

startDatabaseConnection()
  .then(() => {
    app.listen(API_PORT, () => {
      console.log(`[:${API_PORT}] Server running...`);
    });
  })
  .catch((err) => {
    console.log(`Server failed to start due to error ${err}`);
  });
