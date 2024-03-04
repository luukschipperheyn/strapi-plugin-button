"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => {
    const getConfigForProperty = (property) => strapi.plugin("button").config(property);
    return {
        index(ctx) {
            console.log("config controller");
            ctx.body = {
                name: getConfigForProperty("name"),
                buttons: getConfigForProperty("buttons"),
            };
        },
    };
};
