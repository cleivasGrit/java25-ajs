"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const node_sqlite_1 = require("node:sqlite");
exports.db = new node_sqlite_1.DatabaseSync('./app.db');
exports.db.exec(`
  CREATE TABLE IF NOT EXISTS todos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    task TEXT NOT NULL,
    done INTEGER NOT NULL DEFAULT 0
  );
`);
