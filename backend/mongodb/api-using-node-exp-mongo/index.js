const express = require("express");
const app = express();
const { dbConnection } = require("./db");

app.use(express.json());
// get
app.get("/users", async (req, res) => {
  try {
    const db = await dbConnection();
    const collection = db.collection("users");
    const users = await collection.find({}).toArray();
    res.json(users);
  } catch (err) {
    console.log(err);

    res.status(500).json({ error: "Internal server error" });
  }
});

// post

app.post("/users", async (req, res) => {
  try {
    const db = await dbConnection();
    const collection = db.collection("users");
    // const result = await collection.insertOne(req.body);
    // res.send(result);
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000);

// put

app.put("/users/:name", async (req, res) => {
  const db = await dbConnection();
  const collection = db.collection("users");
  // const result = await collection.updateOne(
  //   { name: req.params.name },
  //   { $set: req.body }
  // );

  // res.send(result);
});

app.delete("/users/:name", async (req, res) => {
  const db = await dbConnection();
  const collection = db.collection("users");

  const result = await collection.deleteOne({
    name: req.params.name,
  });
  res.send(result);
});
