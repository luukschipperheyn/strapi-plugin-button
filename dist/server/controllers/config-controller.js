"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ strapi }) => {
    const getConfigForProperty = (property) => strapi.plugin("button").config(property);
    return {
        index(ctx) {
            console.log("config controller");
            ctx.body = {
                url: getConfigForProperty("url"),
                method: getConfigForProperty("method"),
                name: getConfigForProperty("name"),
                buttonName: getConfigForProperty("buttonName"),
            };
        },
    };
};
