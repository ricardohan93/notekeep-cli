const db = require("../utils/db");

module.exports = args => {
  const taskNumber = args._[1];

  if (isNaN(taskNumber)) {
    console.error("Please provide a number");
  }

  db(null, taskNumber, true);
};
