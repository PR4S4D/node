console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes");
console.log(process.argv);
const argv = yargs.argv;
console.log(argv);

var command = process.argv[2];

if (command === "add") {
  console.log("Adding new note");
  notes.addNote(argv.title, argv.body);
} else if (command === "list") {
  notes.getAll();
} else if (command === "remove") {
  notes.remove(argv.title);
} else if (command === "read") {
  notes.read(argv.title);
} else {
  console.log("Command not recognized");
}
