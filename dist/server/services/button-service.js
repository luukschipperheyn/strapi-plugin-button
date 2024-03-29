"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
exports.default = ({ strapi }) => ({
    onButtonClicked() {
        return axios_1.default.request({
            url: strapi.config.get("url"),
            method: strapi.config.get("method"),
        });
    },
});
