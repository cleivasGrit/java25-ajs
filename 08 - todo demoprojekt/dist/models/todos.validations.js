"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodoValidation = exports.createTodoValidation = void 0;
const express_validator_1 = require("express-validator");
exports.createTodoValidation = [
    (0, express_validator_1.body)('task').exists().isString(),
    (0, express_validator_1.body)('done').exists().isBoolean()
];
exports.updateTodoValidation = [
    (0, express_validator_1.body)('done').exists().isBoolean()
];
