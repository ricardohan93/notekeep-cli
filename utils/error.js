const chalk = require("chalk");

module.exports = (error, exit) => {
  console.log(chalk.red(error));
  exit && process.exit(1);
};
