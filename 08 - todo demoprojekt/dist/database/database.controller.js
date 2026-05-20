"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.createTodo = exports.getAllTodos = void 0;
const database_statements_1 = require("./database.statements");
const getAllTodos = () => {
    const rows = database_statements_1.getAllTodosStmt.all();
    return rows.map((row) => ({
        id: row.id,
        task: row.task,
        done: row.done === 1 ? true : false
    }));
};
exports.getAllTodos = getAllTodos;
const createTodo = (newTodo) => {
    const result = database_statements_1.createTodoStmt.run(newTodo.task, newTodo.done ? 1 : 0);
    return result.lastInsertRowid;
};
exports.createTodo = createTodo;
const updateTodo = (id, done) => {
    const result = database_statements_1.updateTodoStmt.run(done ? 1 : 0, id);
    return result.changes > 0;
};
exports.updateTodo = updateTodo;
const deleteTodo = (id) => {
    const result = database_statements_1.deleteTodoStmt.run(id);
    return result.changes;
};
exports.deleteTodo = deleteTodo;
