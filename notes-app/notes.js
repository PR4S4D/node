console.log("Starting notes.js");

const addNote = (title, body) => {
  console.log("Adding note", title, body);
};

const getAll = () => console.log("Getting all notes!");
const remove = title => console.log("Removing note", title);
const read = title => console.log("Reading note", title);

module.exports = {
  addNote,
  getAll,
  read,
  remove
};
