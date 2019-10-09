const minimist = require("minimist");

// usage represents the help guide
const usage = () => {
  const usageText = `
    Opens windows tabs for your projects.

    usage:
      kaboom [!!!!!!]

      commands:
      help:     No help. All alone. Go to readme
    `;
  console.log(usageText);
};

let args = minimist(process.argv.slice(2), {
  alias: {
    h: "help"
  }
});

let tabs = {};
if (args._ && args._.length > 0) {
  usage();
}

if(!args.open){
  // This is the running script
  tabs = [
    {
      "title": "Kaboom Terminal Window Opener",
      "path": "./",
      "commands": ["kaboom --open"],
      "newwindow": true,
      "background": false
    }
  ]
} else {
  console.log("");
  console.log("██╗  ██╗ █████╗ ██████╗  ██████╗  ██████╗ ███╗   ███╗");
  console.log("██║ ██╔╝██╔══██╗██╔══██╗██╔═══██╗██╔═══██╗████╗ ████║");
  console.log("█████╔╝ ███████║██████╔╝██║   ██║██║   ██║██╔████╔██║");
  console.log("██╔═██╗ ██╔══██║██╔══██╗██║   ██║██║   ██║██║╚██╔╝██║");
  console.log("██║  ██╗██║  ██║██████╔╝╚██████╔╝╚██████╔╝██║ ╚═╝ ██║");
  console.log("╚═╝  ╚═╝╚═╝  ╚═╝╚═════╝  ╚═════╝  ╚═════╝ ╚═╝     ╚═╝");
  console.log("Automated Terminal Windows");
  console.log("");
  console.log("======================================================");
  console.log("Opening Windows: ");

  let basedir = process.cwd();
  try {
    const config = require(basedir + "/kaboom.json");
    tabs = config.tabs;
  } catch (error) {
    require("./logger").errorLog(error);
    return;
  }
}

tabs.forEach(require("./opener").openTab);
