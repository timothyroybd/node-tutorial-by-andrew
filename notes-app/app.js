const getNotes = require("./getNotes");
const yargs = require("yargs");

//customize yargs version
yargs.version("1.1.0");
//add, remove, read, list

//create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Body Content",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    console.log(`Title: ${argv.title}, Description: ${argv.body}`);
  },
});

//create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",

  handler: () => {
    console.log("Removing the note");
  },
});

//create read command
yargs.command({
  command: "read",
  describe: "Read  note",

  handler: () => {
    console.log("Reading the note");
  },
});

yargs.command({
  command: "list",
  describe: "Lists notes",
  handler: () => {
    console.log("Listing out all the notes");
  },
});
yargs.parse();
