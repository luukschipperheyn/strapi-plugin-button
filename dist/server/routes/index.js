"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
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
