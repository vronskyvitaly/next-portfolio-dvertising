import { Pool } from 'pg'

const globalForDb = globalThis as unknown as { db: Pool }

export const db =
  globalForDb.db ??
  new Pool({ connectionString: process.env.POSTGRESS_URL })

if (process.env.NODE_ENV !== 'production') globalForDb.db = db

// Создаём таблицы если не существуют (выполняется при первом запросе)
let initialized = false
export async function ensureTables() {
  if (initialized) return
  await db.query(`
    CREATE TABLE IF NOT EXISTS brief_users (
      id SERIAL PRIMARY KEY,
      login TEXT UNIQUE NOT NULL,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL,
      created_at TIMESTAMPTZ DEFAULT NOW()
    );
    CREATE TABLE IF NOT EXISTS briefs (
      id SERIAL PRIMARY KEY,
      user_id INTEGER REFERENCES brief_users(id),
      project_type TEXT NOT NULL DEFAULT '',
      answers JSONB NOT NULL DEFAULT '{}',
      submitted BOOLEAN NOT NULL DEFAULT false,
      created_at TIMESTAMPTZ DEFAULT NOW(),
      updated_at TIMESTAMPTZ DEFAULT NOW()
    );
  `)
  initialized = true
}
