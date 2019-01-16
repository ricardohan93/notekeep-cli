const fs = require("fs");
const chalk = require("chalk");

module.exports = args => {
  fs.readFile("db.json", "utf8", (err, jsonData) => {
    if (err) console.error(err);

    const obj = JSON.parse(jsonData);
    let index = 1;

    obj.notes.forEach(note => {
      console.log(chalk.yellow(`${index++}. ${note.title}`));
    });
  });
};
