const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Unable to connect to TodoApp", err);
  }

  db.collection("Todos")
    .deleteMany({ text: "eat lunch" })
    .then(res => console.log(res));
});

// similarly
// deleteOne
// findOneAndDelete
