const minimist = require("minimist");

// usage represents the help guide
const usage = () => {
  const usageText = `
  opens windows tabs for your projects.

  usage:
    kaboom <command>

    commands:
    help:     used to print the usage guide
  `;
  console.log(usageText);
};

let args = minimist(process.argv.slice(2), {
  alias: {
    h: "help"
  }
});

// Handle unknown command passed
if (args._) {
  usage();
}

let config = {};

try {
  config = require("./config.json");
} catch (error) {
  require("./logger").errorLog(error);
  return;
}

config.tabs.forEach(require("./opener").openTab);
