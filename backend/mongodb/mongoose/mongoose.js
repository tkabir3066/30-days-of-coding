const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const UserModel = mongoose.model("users", UserSchema);
const main = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/myDatabase");
  const newData = new UserModel({
    name: "bale",
    age: 35,
  });

  await newData.save();
  console.log("data added");
};

main();
