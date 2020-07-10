import mongoose from "mongoose";
import { DB_URL } from "../config/db.config";

export const startDatabaseConnection = async () =>
  await mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

export default startDatabaseConnection;
