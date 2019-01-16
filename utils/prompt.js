const readline = require("readline");

module.exports = question => {
  const r = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
  });

  return new Promise((resolve, reject) => {
    r.question(question, answer => {
      resolve(answer);
      r.close();
    });
  });
};
