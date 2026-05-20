"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const page_route_1 = require("./routes/page.route");
const todo_route_1 = require("./routes/todo.route");
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use(express_1.default.static(path_1.default.join(__dirname, "../public"))); //för att kunna serva statiska filer
exports.app.use('/api/todos', todo_route_1.todoRouter);
exports.app.use('/', page_route_1.pageRouter);
exports.app.use((req, res) => {
    res.sendFile(path_1.default.join(__dirname, "../public/404.html"));
});
exports.app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error" });
});
