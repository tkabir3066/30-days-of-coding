const { dbConnection } = require("./db");

const deleteDocument = async () => {
  try {
    const db = await dbConnection();
    const collection = db.collection("users");
    const deletedResult = await collection.deleteOne({ name: "patkha" });
    console.log(`${deletedResult.deletedCount} document deleted`);
  } catch (err) {
    console.log(err);
  }
};

deleteDocument();
