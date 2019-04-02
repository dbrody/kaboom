const { execSync } = require("child_process");

const openTab = ({ title, path, splits = [], commands = [] }) => {
  const defaults = ["-a iTerm2"];
  let params = [...defaults, `-t '${title}'`, `-d ${path}`];
  let handleSplits = splits.map(splitOptions =>
    prepareSplitCommand(splitOptions, { debug: true, tabPath: path })
  );

  const initCommands = [commands, ...handleSplits].join("; ");

  const cmd = `ttab ${params.join(" ")} ${initCommands}`;

  execSync(cmd);
};

const prepareSplitCommand = (
  { commands = [], path: customSplitPath },
  { debug = true, tabPath }
) => {
  const devNull = debug ? "" : "&>/dev/null";

  const customCommandsLines = commands.map(
    command => `write text "${command}"`
  );

  const cdPathLine = `write text "cd ${customSplitPath || tabPath}"`;

  const osaLines = [
    'tell application "iTerm"',
    "tell current session of current window to set newSplit to split horizontally with same profile",
    "tell newSplit",
    "select",
    cdPathLine,
    ...customCommandsLines,
    "end tell",
    "end tell"
  ]
    // TODO: this might explode if command has quotes
    .map(line => `-e '${line}'`)
    .join(" ");

  const cmd = `osascript ${devNull} ${osaLines}`;
  return cmd;
};

module.exports = {
  openTab
};
