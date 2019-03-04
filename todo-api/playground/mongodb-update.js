const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (error, db) => {
  if (error) {
    console.log("Unable to connect to Mongodb");
  }

  console.log("Connected to Mongodb");

  db.collection("todos")
    .findOneAndUpdate(
      {
        _id: new ObjectID("5c55c68c5d615d35c8597ec0")
      },
      {
        $set: {
          completed: true
        }
      },
      {
        returnOriginal: false
      }
    )
    .then(res => console.log(res));
});
