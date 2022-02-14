const fs = require("fs");
const getNotes = () => {
  return "Your Notes ...";
};

//Add Notes
const addNote = (title, body) => {
  const notes = lodaNote();

  // const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
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
//Read Note
const readNote = (title) => {
  const notes = lodaNote();
  const matchedNote = notes.find((note) => {
    return note.title === title;
  });
  if (matchedNote) {
    console.log(matchedNote.title, matchedNote.body);
  } else {
    console.log("The title not found");
  }
};
module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNote,
  readNote,
};
