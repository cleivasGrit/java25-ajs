import { Router, Request, Response } from "express";
import {body, validationResult} from 'express-validator';

export const userRouter = Router();
const validations = [
    body('name').exists().isString(),
    body('isAdmin').exists().isBoolean(),
    body('age').exists().isNumeric()
]

userRouter.get('/', (req, res)=>{
    res.json({message: '/user GET'})
});
userRouter.get('/:id', (req, res)=>{
    res.json({message: '/user GET', id: req.params.id})
});

userRouter.post('/',validations, (req:Request, res: Response)=>{
    // console.log(req.body);
    const errors = validationResult(req);
    // console.log(errors.array().length)
    if(errors.array().length>0){
        return res.status(400).json('Wrong format');
    }

    res.json('success')
})