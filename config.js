const config = {
  tabs: [
    {
      title: "core-api",
      path: "~/workspace/airsorted/core-api",
      commands: [". env/bin/activate"],
      splits: [
        {
          title: "logger",
          path: "~/",
          commands: ["l"]
        }
      ]
    },
    {
      title: "housekeeping-app",
      path: "~/workspace/airsorted/housekeeping-app",
      splits: [
        {
          title: "1"
        },
        {
          title: "2"
        }
      ]
    }
  ]
};

module.exports = {
  ...config
};
