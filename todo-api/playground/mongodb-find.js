const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) return console.log("Unable to connect to TodoApp", err);

  db.collection("Todos")
    .find()
    .toArray()
    .then(
      docs => {
        // console.log(JSON.stringify(docs, undefined, 2));
      },
      err => console.log("Unable to find todos", err)
    );

  // with query

  db.collection("Todos")
    .find({ _id: new ObjectID("5c556ee837c459d0c05dc7f8") })
    .toArray()
    .then(
      docs => {
        console.log(JSON.stringify(docs, undefined, 2));
      },
      err => console.log("Unable to find todos", err)
    );
});
