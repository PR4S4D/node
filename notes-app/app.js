console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes");
const argv = yargs.argv;

var command = process.argv[2];

if (command === "add") {
  var note = notes.addNote(argv.title, argv.body);
  note ? notes.log(note) : console.log("Note already exists!");
} else if (command === "list") {
  notes.getAll().map(note => notes.log(note));
} else if (command === "remove") {
  const title = argv.title;
  var message = notes.remove(title)
    ? `Note with title - ${title} has been removed`
    : `Note with title - ${title} not found`;
  console.log(message);
} else if (command === "read") {
  var note = notes.read(argv.title);
  if (note) {
    notes.log(note);
  } else {
    console.log("Not found!");
  }
} else {
  console.log("Command not recognized");
}
