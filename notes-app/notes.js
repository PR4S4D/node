console.log("Starting notes.js");

const fs = require("fs");
const NOTES_FILE = "notes-data.json";

const fetchNotes = () => {
  try {
    var notesString = fs.readFileSync(NOTES_FILE);
    return JSON.parse(notesString);
  } catch (error) {
    console.log("Can't read file", NOTES_FILE);
    return [];
  }
};

var saveNotes = notes => {
  fs.writeFileSync(NOTES_FILE, JSON.stringify(notes));
};

const addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => fetchNotes();

const remove = title => {
  var notes = fetchNotes();
  const filteredNotes = notes.filter(note => note.title !== title);
  saveNotes(filteredNotes);
  return filteredNotes.length != notes.length;
};

const read = title => {
  var notes = fetchNotes().filter(note => note.title === title);
  return notes[0];
};

const log = note => {
  console.log("--------");
  console.log("Title - ", note.title);
  console.log("Body - ", note.body);
};

module.exports = {
  addNote,
  getAll,
  read,
  remove,
  log
};
