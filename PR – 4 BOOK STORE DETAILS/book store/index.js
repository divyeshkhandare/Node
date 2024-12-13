const express = require("express");
const dbconnect = require("./config/db");
const Book = require("./model/books.schema");
const BookVAlidation = require("./middleware/books");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the Book Store");
});

app.get("/books", async (req, res) => {
  try {
    const book = await Book.find();
    res.status(200).send(book);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

app.get("/books/book/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findById(id);
    res.status(200).json(book);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

app.post("/books/addbooks", BookVAlidation, async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(200).json(book);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

app.patch("/books/update/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const book = await Book.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(book);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

app.delete("/books/delete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    res.status(200).json(deletedBook);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

app.get("/books/filter", async (req, res) => {
  const { title, author, price, category } = req.query;
  let FilteredBook = {};
  if (title) {
    FilteredBook.title = title;
  }
  if (author) {
    FilteredBook.author = author;
  }
  if (category) {
    FilteredBook.category = category;
  }

  let books = await Book.find(FilteredBook);

  if (price === "lth") {
    books = books.sort((a, b) => a.price - b.price);
  } else {
    books = books.sort((a, b) => b.price - a.price);
  }
  res.status(200).send(books);
});

app.listen(8090, () => {
  console.log("Server is running on port 8090");
  dbconnect();
});
