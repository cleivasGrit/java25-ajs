/**
 * Databasfilen läses in här, eller skapas om ingen finns. Här skapar vi även vår todos-tabell om den inte redan finns. Alla databasoperationer sker i database.controller.ts som i sin tur använder SQL statements från database.statements.
*/
import {DatabaseSync} from 'node:sqlite';

export const db = new DatabaseSync('./app.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    task TEXT NOT NULL,
    done INTEGER NOT NULL DEFAULT 0
  );
`);