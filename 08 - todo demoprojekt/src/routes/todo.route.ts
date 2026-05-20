/**
 * Här hittar ni alla handlers för requests till todo-API:t.
 * Varje handler använder en funktion från database.controller för att uppdatera eller läsa från databasen och skickar tillbaka ett response beroende på resultatet av databasoperationen.
 * I vissa handlers använder vi även express-validator för att validera inkommande data innan vi försöker uppdatera databasen.
 */
import { Router, Request, Response } from "express";
import * as db from '../database/database.controller';
import { createTodoValidation, updateTodoValidation } from "../models/todos.validations";
import { validationResult } from "express-validator";

export const todoRouter = Router();

todoRouter.get('/', (req, res)=>{
    const todos = db.getAllTodos();
    res.json(todos);
});

todoRouter.post('/', createTodoValidation, (req: Request, res: Response)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({ errors: errors.array() });
        return;
    }
    const { task, done } = req.body;
    const id = db.createTodo({ task, done });
    res.status(201).json({id});
})

todoRouter.delete('/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    const success = db.deleteTodo(id);
    if(!success){
        res.status(404).json({ message: "Todo not found" });
        return;
    }
    res.send("delete todo with id: " + req.params.id);
})

todoRouter.patch('/:id', updateTodoValidation, (req: Request, res: Response)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        res.status(400).json({ errors: errors.array() });
        return;
    }

    const { done } = req.body;
    const id = parseInt(req.params.id as string);

    const success = db.updateTodo(id, done);

    if(!success){
        res.status(404).json({ message: "Todo not found" });
        return;
    }
    res.send("update todo with id: " + req.params.id);
});

todoRouter.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});
