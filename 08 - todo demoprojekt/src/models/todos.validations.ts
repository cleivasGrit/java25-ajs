import {body} from 'express-validator';

export const createTodoValidation = [
    body('task').exists().isString(),
    body('done').exists().isBoolean()
];

export const updateTodoValidation = [
    body('done').exists().isBoolean()
];