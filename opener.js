const { execSync } = require("child_process");

const openTab = ({ title, path, splits = [], commands = [], newwindow = false, background = true }) => {
  let message = "+ Opening " + title;
  let defaults = ["-a Terminal"];
  if(newwindow){
    defaults.push('-w');
    message += " (new window)";
  }
  if(background){
    defaults.push('-G');
    message += " (background)";
  }
  let params = [...defaults, `-t '${title}'`, `-d ${path}`];
  let handleSplits = splits.map(splitOptions =>
    prepareSplitCommand(splitOptions, { debug: true, tabPath: path })
  );

  const initCommands = [...commands, ...handleSplits].join("; ");
  const cmd = `ttab ${params.join(" ")} '${initCommands}'`;
  process.stdout.write(message + "....");
  execSync(cmd);
  console.log("...done.");
};

// TODO:
// Problem with activating tabs, steal focus and execs commands in incorrect windows
// Quick fix, wait 2-3 seconds if splits are used
const prepareSplitCommand = (
  { commands = [], path: customSplitPath },
  { debug = true, tabPath }
) => {
  const devNull = debug ? "" : "&>/dev/null";

  const customCommandsLines = commands.map(
    command => `write text \\"${command}\\"`
  );

  const cdPathLine = `write text \\"cd ${customSplitPath || tabPath}\\"`;
  const osaLines = [
    'tell application \\"iTerm\\"',
    "tell current session of current window to set newSplit to split horizontally with same profile",
    "tell newSplit",
    "select",
    cdPathLine,
    ...customCommandsLines,
    "end tell",
    "end tell"
  ]
    .map(line => `-e "${line}"`)
    .join(" ");

  return `osascript ${devNull} ${osaLines}`;
};

module.exports = {
  openTab
};
