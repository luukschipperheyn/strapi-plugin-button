"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const button_controller_1 = __importDefault(require("./button-controller"));
const config_controller_1 = __importDefault(require("./config-controller"));
exports.default = {
    buttonController: button_controller_1.default,
    configController: config_controller_1.default,
};
