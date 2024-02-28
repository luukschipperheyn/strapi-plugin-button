"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => ({
    index(ctx) {
        strapi.plugin("button").service("buttonService").onButtonClicked();
        ctx.body = "button clicked";
    },
});
