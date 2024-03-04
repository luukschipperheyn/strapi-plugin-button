export default {
  button: {
    type: "admin",
    routes: [
      {
        method: "GET",
        path: "/config",
        handler: "configController.index",
        config: {
          policies: [],
        },
      },
    ],
  },
};
