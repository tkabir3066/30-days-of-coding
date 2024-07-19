const mongoose = require("mongoose");
const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
});

const Books = mongoose.model("Books", bookSchema);

module.exports = Books;
