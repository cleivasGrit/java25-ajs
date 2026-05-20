/**
 * Här hittar ni alla funktioner som uppdaterar eller läser från databasen. Varje funktion använder ett SQL statement från database.statements.ts för att utföra en databasoperation och returnerar sedan resultatet av den operationen.
 * Dessa funktioner används i våra API route handlers i todo.route.ts
 */
import {getAllTodosStmt, createTodoStmt, updateTodoStmt, deleteTodoStmt} from "./database.statements";
import {Todo, newTodo} from "../models/todos.types";

export const getAllTodos = ():Todo[] => {
    const rows = getAllTodosStmt.all();

    
    return rows.map((row: any) => ({
        id: row.id,
        task: row.task,
        done: row.done === 1 ? true : false
    })) as Todo[];
}

export const createTodo = (newTodo: newTodo): number => {
    const result = createTodoStmt.run(newTodo.task, newTodo.done ? 1 : 0);
    return result.lastInsertRowid as number;
}

export const updateTodo = (id: number, done: boolean): boolean => {
    const result = updateTodoStmt.run(done ? 1 : 0, id);
    return result.changes>0;
}

export const deleteTodo = (id: number): number => {
    const result = deleteTodoStmt.run(id);
    return result.changes as number;
}