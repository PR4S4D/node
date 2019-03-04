const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp", (error, db) => {
  if (error) return console.log("Unable to connect to MongoDB server", error);

  console.log("Connected to MongoDB server");

  db.collection(" ").insertOne(
    { text: "Something to do", completed: false },
    (err, result) => {
      if (err) return console.log("Unable to insert TODO", err);

      console.log(JSON.stringify(result.ops, undefined, 2));
    }
  );

  db.close();
});
