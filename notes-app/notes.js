const fs = require("fs");
const getNotes = () => {
  return "Your Notes ...";
};

//Add Notes
const addNote = (title, body) => {
  const notes = lodaNote();
  const duplicateNotes = notes.filter((note) => note.title === title);
  console.log(duplicateNotes);
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    console.log("New Note Added");
  } else {
    console.log("Note title taken");
  }

  saveNotes(notes);
};
const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};
const lodaNote = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (err) {
    return [];
  }
};
//Remove Notes
const removeNote = (title) => {
  //Load existing notes
  const notes = lodaNote();
  //filter out matching notes
  const removedNoteTitle = notes.filter((note) => {
    return note.title !== title;
  });
  saveNotes(removedNoteTitle);
  if (notes.length > removedNoteTitle.length) {
    console.log("Your note has been removed");
  } else {
    console.log("No note found");
  }
};
//List Note
const listNote = () => {
  const notes = lodaNote();
  console.log("Your Notes");

  const noteTitle = notes.forEach((note) => {
    console.log(note.title);
  });
};
module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNote,
};
