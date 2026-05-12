import {DatabaseSync} from 'node:sqlite';

const db = new DatabaseSync('./app.db');

// Skapa
db.exec(`
  CREATE TABLE IF NOT EXISTS cats (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    is_lost INTEGER NOT NULL DEFAULT 1
  );
`);

// skapa cat
const createCatStmt = db.prepare(`
  INSERT INTO cats (name, is_lost)
  VALUES (?, ?)
`);
export function createCat({name, isLost = true}){
    const result = createCatStmt.run(name, isLost?1:0);
    return {id: result.lastInsertRowid, name, isLost}
}


// Hämta alla katter
const getAllCatsStmt = db.prepare(`
  SELECT * FROM cats
`);
export function getAllCats() {
  return getAllCatsStmt.all();
}

// Hämta katt med ett id
const getCatByIdStmt = db.prepare(`
  SELECT * FROM cats
  WHERE id = ?
`);

export function getCat(id){
    return getCatByIdStmt.get(id);
}

// Uppdatera isLost
const updateCatLostStmt = db.prepare(`
  UPDATE cats
  SET is_lost = ?
  WHERE id = ?
`);

export function updateLost(id, isLost){
    const result = updateCatLostStmt.run(isLost?1:0, id);
    return result.changes>0;
}

// Ta bort katt
const deleteCatStmt = db.prepare(`
  DELETE FROM cats
  WHERE id = ?
`);

export function deleteCat(id){
    const result = deleteCatStmt.run(id);
    return result.changes>0;
}


// console.log(createCat({name: 'Moufasa', isLost: true}))
// console.log(updateLost(5, true))
// console.log(getCat(2))
// console.log(deleteCat(2))
// console.log(getAllCats())
// 

// db.close();