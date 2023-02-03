import sqlite3 from "better-sqlite3";
import type { Database } from "better-sqlite3";

let db: Database;

declare global {
  var __db: Database | undefined;
}

// this is needed because in development we don't want to restart
// the server with every change, but we want to make sure we don't
// create a new connection to the DB with every change either.
if (process.env.NODE_ENV === "production") {
  db = new sqlite3("./db/dev.db");
} else {
  if (!global.__db) {
    global.__db = new sqlite3("./db/dev.db");
  }
  db = global.__db;
}

const initSchema = () => {
  db.exec(`
  CREATE TABLE IF NOT EXISTS note (
    slug TEXT PRIMARY KEY,
    title TEXT,
    content TEXT NOT NULL,
    createdAt TEXT,
    updatedAt TEXT
  )
  `);
};

initSchema();

export { db };
