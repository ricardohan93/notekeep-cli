module.exports = args => {
  const helpText = `
    notekeep helps you manage your tasks.

    usage:

        notekeep <command>

    <command> can be:

    new: .............. used to create new notes

    get: .............. used to retrieve your notes

    complete: ......... used to mark a note as completed

    version: .......... used to show the current version

    help: ............. used to print the usage guide
  `;

  console.log(helpText);
};
