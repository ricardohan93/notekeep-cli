const fs = require("fs");
const chalk = require("chalk");

module.exports = (task, taskNumber, complete = false) => {
  let obj = {
    notes: []
  };

  if (complete) {
    fs.readFile("db.json", "utf8", (err, jsonData) => {
      if (err) console.log("file not found");

      obj = JSON.parse(jsonData);
      obj.notes[taskNumber - 1].complete = true;

      let json = JSON.stringify(obj);
      fs.writeFile("db.json", json, "utf8", err => {
        if (err) throw err;
        console.log(chalk.blue("\ncompletion updated!\n"));
        obj.notes.forEach(note => {
          console.log(`${note.title} ...... ${note.complete}\n`);
        });
      });
    });
    return;
  }

  obj.notes.push({ title: task, complete: false });

  let json = JSON.stringify(obj);

  fs.readFile("db.json", "utf8", function(err, jsonData) {
    if (err) {
      console.log("file not found, creating one");
      fs.writeFile("db.json", json, "utf8", err => {
        if (err) throw err;
        console.log("file written for the first time");
      });
    } else {
      obj = JSON.parse(jsonData);
      obj.notes.push({ title: task, complete: false });
      json = JSON.stringify(obj);
      fs.writeFile("db.json", json, "utf8", err => {
        if (err) throw err;
        console.log(chalk.blue("file written again"));
      });
    }
  });
};
