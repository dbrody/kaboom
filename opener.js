const { execSync } = require("child_process");

const openTab = ({ title, path, splits = [], commands = [] }) => {
  const defaults = ["-a iTerm2"];
  let params = [...defaults, `-t '${title}'`, `-d ${path}`];
  const initCommands = [commands, ...splits.map(prepareSplitCommand)].join(
    "; "
  );

  const cmd = `ttab ${params.join(" ")} ${initCommands}`;
  // const cmd = `ttab ${params.join(" ")} pwd;${initSplitCommands}`;
  console.log(cmd);
  // console.log("\n");

  execSync(cmd);
};

const prepareSplitCommand = ({ title = "", commands = [], debug = true }) => {
  const devNull = debug ? "" : "&>/dev/null";

  const commandsOsaLines = commands.map(command => `write text "${command}"`);

  const osaLines = [
    'tell application "iTerm"',
    "tell current session of current window to set newSplit to split horizontally with same profile",
    "tell newSplit",
    "select",
    ...commandsOsaLines,
    "end tell",
    "end tell"
  ]
    // TODO: this might explode if command has quotes
    .map(line => `-e '${line}'`)
    .join(" ");

  const cmd = `osascript ${devNull} ${osaLines}`;
  // console.log(cmd);
  return cmd;
};

module.exports = {
  openTab
};
