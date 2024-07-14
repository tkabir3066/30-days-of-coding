const { dbConnection } = require("./db");

const update = async () => {
  try {
    const db = await dbConnection();
    const collection = db.collection("users");
    const updatedResult = await collection.updateOne(
      { name: "patkha" },
      { $set: { age: 13 } }
    );

    console.log(`${updatedResult.acknowledged} document updated`);
  } catch (error) {
    console.log(error);
  }
};

update();
