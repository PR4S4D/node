var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/TodoApp");

var Todo = mongoose.model("Todo", {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

var newTodo = new Todo({
  text: "Cook dinner"
});

var readTodo = new Todo({
  text: "Read Javascript",
  completed: false
});

readTodo
  .save()
  .then(doc => console.log("Saved successfully", doc))
  .catch(error => console.log("Couldn't save doc", error));

var readRxjs = new Todo({
  text: "Read Rxjs",
  completed: false
});

readRxjs
  .save()
  .then(doc => console.log(`Rxjs - ${doc}`))
  .catch(error => console.log("error while saving rxjs todo", doc));
