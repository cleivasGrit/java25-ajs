"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoRouter = void 0;
const express_1 = require("express");
const db = __importStar(require("../database/database.controller"));
const todos_validations_1 = require("../models/todos.validations");
const express_validator_1 = require("express-validator");
exports.todoRouter = (0, express_1.Router)();
exports.todoRouter.get('/', (req, res) => {
    const todos = db.getAllTodos();
    res.json(todos);
});
exports.todoRouter.post('/', todos_validations_1.createTodoValidation, (req, res) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }
    const { task, done } = req.body;
    const id = db.createTodo({ task, done });
    res.status(201).json({ id });
});
exports.todoRouter.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const success = db.deleteTodo(id);
    if (!success) {
        res.status(404).json({ message: "Todo not found" });
        return;
    }
    res.send("delete todo with id: " + req.params.id);
});
exports.todoRouter.patch('/:id', todos_validations_1.updateTodoValidation, (req, res) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ errors: errors.array() });
        return;
    }
    const { done } = req.body;
    const id = parseInt(req.params.id);
    const success = db.updateTodo(id, done);
    if (!success) {
        res.status(404).json({ message: "Todo not found" });
        return;
    }
    res.send("update todo with id: " + req.params.id);
});
exports.todoRouter.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});
