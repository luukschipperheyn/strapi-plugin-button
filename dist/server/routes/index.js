"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    "button-clicked": {
        type: "admin",
        routes: [
            {
                method: "GET",
                path: "/button-clicked",
                handler: "buttonController.index",
                config: {
                    policies: [],
                    auth: false,
                },
            },
            {
                method: "GET",
                path: "/config",
                handler: "configController.index",
                config: {
                    policies: [],
                    auth: false,
                },
            },
        ],
    },
};
