import { Router } from "express";

export const commentRouter = Router();

commentRouter.get('/', (req, res)=>{
    res.json({message: '/comment GET'})
});
commentRouter.get('/:id', (req, res)=>{
    res.json({message: '/comment GET', id: req.params.id})
});
