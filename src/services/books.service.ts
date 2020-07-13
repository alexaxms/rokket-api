import Book from "../models/Book.model";
import { Request, Response } from "express";

export const getBooks = async (req: Request, res: Response) => {
  try {
    const books = await Book.find({});
    return res.json({ books: books });
  } catch (err) {
    return res.status(500).json({
      message: `couldn't fetch books from db`,
      error: err,
    });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await Book.findById(req.params.bookId);
    return book !== null
      ? res.status(200).json({ book: book })
      : res.status(404).send();
  } catch (err) {
    return res.status(500).json({
      message: `couldn't find book ${req.params.bookId} in db`,
      error: err,
    });
  }
};

export const updateBookById = async (req: Request, res: Response) => {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.bookId,
      { ...req.body },
      { new: true }
    );
    return book !== null
      ? res.status(200).json({ book: book })
      : res.status(404).send();
  } catch (err) {
    return res.status(500).json({
      message: `couldn't update book ${req.params.bookId} in db`,
      error: err,
    });
  }
};

export const createBook = async (req: Request, res: Response) => {
  try {
    const book = await Book.create({ ...req.body });
    return res.status(201).json({ book: book });
  } catch (err) {
    return res.status(500).json({
      message: `couldn't save book in db`,
      error: err,
    });
  }
};

export const deleteBookById = async (req: Request, res: Response) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.bookId);
    return book !== null ? res.status(200).send() : res.status(404).send();
  } catch (err) {
    return res.status(500).json({
      message: `couldn't delete book ${req.params.bookId} from db`,
      error: err,
    });
  }
};
