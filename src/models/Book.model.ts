import mongoose from "mongoose";

interface IBook extends mongoose.Document {
  title: string;
  state: string;
  author: string;
}

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  author: String,
});

const Book = mongoose.model<IBook>("books", BookSchema);

export default Book;
