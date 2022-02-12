const getNotes = require("./getNotes");
const yargs = require("yargs");

//customize yargs version
yargs.version("1.1.0");
//add, remove, read, list

//create add command
yargs.command({
  command: "add",
  description: "Add a new note",
  handler: () => {
    console.log("Adding a new note");
  },
});

//create remove command
yargs.command({
  command: "remove",
  description: "Remove a note",
  handler: () => {
    console.log("Removing the note");
  },
});

//create read command
yargs.command({
  command: "read",
  description: "Read  note",
  handler: () => {
    console.log("Reading the note");
  },
});

yargs.command({
  command: "list",
  description: "Lists notes",
  handler: () => {
    console.log("Listing out all the notes");
  },
});
console.log(yargs.argv);
