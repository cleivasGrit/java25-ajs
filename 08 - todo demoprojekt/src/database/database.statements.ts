/**
 * Här definieras alla SQL statements som används i database.controller.ts för att uppdatera eller läsa från databasen. 
 */
import { db } from "./database.config";

export const createTodoStmt = db.prepare(`
  INSERT INTO todos (task, done)
  VALUES (?, ?)
`);

export const getAllTodosStmt = db.prepare(`
  SELECT * FROM todos
`);

export const updateTodoStmt = db.prepare(`
  UPDATE todos
  SET done = ?
  WHERE id = ?
`);

export const deleteTodoStmt = db.prepare(`
  DELETE FROM todos
  WHERE id = ?
`);