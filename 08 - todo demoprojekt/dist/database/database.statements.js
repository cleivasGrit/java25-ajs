"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodoStmt = exports.updateTodoStmt = exports.getAllTodosStmt = exports.createTodoStmt = void 0;
const database_config_1 = require("./database.config");
exports.createTodoStmt = database_config_1.db.prepare(`
  INSERT INTO todos (task, done)
  VALUES (?, ?)
`);
exports.getAllTodosStmt = database_config_1.db.prepare(`
  SELECT * FROM todos
`);
exports.updateTodoStmt = database_config_1.db.prepare(`
  UPDATE todos
  SET done = ?
  WHERE id = ?
`);
exports.deleteTodoStmt = database_config_1.db.prepare(`
  DELETE FROM todos
  WHERE id = ?
`);
