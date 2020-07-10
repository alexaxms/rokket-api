import express, { Response } from "express";
import Book from "../models/Book.model";

const books = express.Router();

// Get all books
books.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    return res.json(books);
  } catch (err) {
    return res.status(500).json({
      message: "couldn't fetch books from db",
      error: err,
    });
  }
});

// Get single book by ID
books.get("/:bookId", async (req, res) => {
  try {
    const book = await Book.findById(req.params.bookId);
    if (book === null) return res.status(404).send();
    return res.json(book);
  } catch (err) {
    res.status(500).json({
      message: `couldn't find book ${req.params.bookId} in db`,
      error: err,
    });
  }
});

// Update book by ID
books.patch("/:bookId", async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.bookId, {
      ...req.body,
    });
    return res.status(200).send();
  } catch (err) {
    res.status(500).json({
      message: `couldn't update book ${req.params.bookId} in db`,
      error: err,
    });
  }
});

// Create book
books.post("/", (req, res) => {
  try {
    Book.create({ ...req.body });
    return res.status(201).send();
  } catch (err) {
    return res.status(500).json({
      message: `couldn't save book in db`,
      error: err,
    });
  }
});

// Delete book by ID
books.delete("/:bookId", async (req, res) => {
  try {
    await Book.findByIdAndDelete(req.params.bookId);
    return res.status(200).send();
  } catch (err) {
    res.status(500).json({
      message: `couldn't delete book ${req.params.findById} from db`,
      error: err,
    });
  }
});

export default books;
