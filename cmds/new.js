const chalk = require("chalk");
const prompt = require("../utils/prompt");
const db = require("../utils/db");

module.exports = args => {
  const question = chalk.blue("Type in your task\n");
  prompt(question).then(task => {
    db(task);
  });
};
