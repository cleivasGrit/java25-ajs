import express from 'express';
import * as db from './database.js'
console.log(db)
const PORT = 3000;

const app = express();
app.use(express.json())

app.get('/cats', (req, res)=>{
    const cats = db.getAllCats();
    res.json(cats);
})

app.get('/cats/:id', (req, res)=>{
    const {id} = req.params;
    console.log(id)
    const cat = db.getCat(id);
    if(cat){
        res.json(cat);
    }
    else{
        res.status(404);
        res.json({error: 'cat not found' })
    }
})

app.patch('/cats/:id', (req, res)=>{
    const {id} = req.params;
    const {isLost} = req.body;
    const hasUpdated = db.updateLost(id, isLost);

    const message = hasUpdated? 'success':'failed'
    res.json({message});
})

app.post('/cats', (req, res)=>{
    console.log(req.body);
    const newCat = db.createCat(req.body);
    res.json({message: `New cat create with id ${newCat.id}`})
})

app.delete('/cats/:id', (req, res)=>{
    const {id} = req.params;
    const isDeleted = db.deleteCat(id);
    
    const message = isDeleted? 'success':'failed'
    res.json({message});
});

app.listen(PORT, ()=>{
    console.log('listening at ', PORT)
})