const {
  getNotes,
  addNote,
  removeNote,
  listNote,
  readNote,
} = require("./notes");
const yargs = require("yargs");

//customize yargs version
yargs.version("1.1.0");
//add, remove, read, list

//create add command
//first command is add; it takes title and body input and runs addnote function
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
    addNote(argv.title, argv.body);
  },
});

//create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Remove Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    removeNote(argv.title);
  },
});

//create read command
yargs.command({
  command: "read",
  describe: "Read  note",
  builder: {
    title: {
      describe: "Read Note",
      demandOption: true,
      type: "string",
    },
  },

  handler(argv) {
    readNote(argv.title);
  },
});

yargs.command({
  command: "list",
  describe: "Lists notes",
  handler: () => {
    listNote();
  },
});
yargs.parse();
