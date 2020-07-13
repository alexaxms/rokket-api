import express from "express";
import Book from "../models/Book.model";
import {
  getBooks,
  getBookById,
  updateBookById,
  createBook,
  deleteBookById,
} from "../services/books.service";

const books = express.Router();

// Get all books
books.get("/", getBooks);

// Get single book by ID
books.get("/:bookId", getBookById);

// Update book by ID
books.patch("/:bookId", updateBookById);

// Create book
books.post("/", createBook);

// Delete book by ID
books.delete("/:bookId", deleteBookById);

export default books;
