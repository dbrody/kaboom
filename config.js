const config = {
  tabs: [
    {
      title: "core-api",
      path: "~/workspace/airsorted/core-api",
      commands: [". env/bin/activate", "l"],
      splits: [
        {
          title: "logger",
          path: "~/",
          commands: ["l", "cd 'workspace'", "echo 'AMAZING!'"]
        },
        {
          title: "logger",
          path: "~/",
          commands: ["l", "cd 'Downloads'", "echo 'Neat!'"]
        }
      ]
    },
    {
      title: "housekeeping-app",
      path: "~/workspace/airsorted/housekeeping-app",
      splits: [
        {
          title: "1"
        }
      ]
    }
  ]
};

module.exports = {
  ...config
};
