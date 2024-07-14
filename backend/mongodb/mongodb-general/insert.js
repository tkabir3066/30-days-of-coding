const { dbConnection } = require("./db");

const insert = async () => {
  try {
    const db = await dbConnection();
    const collection = db.collection("users");

    const data = [
      { name: "patkha", age: 28 },
      { name: "bahal", age: 38 },
    ];
    const insertedResult = await collection.insertMany(data);
    console.log(`${insertedResult.insertedCount} document inserted`);
  } catch (error) {
    console.log(error);
  }
};

insert();
