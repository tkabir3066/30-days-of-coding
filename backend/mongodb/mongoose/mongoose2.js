const express = require("express");
require("./config");
const Books = require("./book");

//create express app
const app = express();

//middleware
app.use(express.json());
//get
app.get("/books", async (req, res) => {
  try {
    const books = await Books.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

//post

app.post("/books", async (req, res) => {
  try {
    const newData = new Books(req.body);
    const result = await newData.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

//put

app.put("/books/:id", async (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;

  const updatedBook = await Books.findByIdAndUpdate(id, { title, author });
  res.json(updatedBook);
});

//delete
app.delete("/books/:id", async (req, res) => {
  const { id } = req.params;

  await Books.findByIdAndDelete(id);
  res.sendStatus(204);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
