import { Pool } from 'pg'

const globalForDb = globalThis as unknown as { db: Pool }

export const db =
  globalForDb.db ??
  new Pool({ connectionString: process.env.POSTGRESS_URL })

if (process.env.NODE_ENV !== 'production') globalForDb.db = db

let initialized = false
export async function ensureTables() {
  if (initialized) return

  // Миграция: если есть старая схема с login — дропаем и пересоздаём
  await db.query(`
    DO $$
    BEGIN
      IF EXISTS (
        SELECT 1 FROM information_schema.columns
        WHERE table_name = 'brief_users' AND column_name = 'login'
      ) THEN
        DROP TABLE IF EXISTS briefs;
        DROP TABLE IF EXISTS brief_users;
      END IF;
    END $$;
  `)

  await db.query(`
    CREATE TABLE IF NOT EXISTS brief_users (
      id SERIAL PRIMARY KEY,
      email TEXT UNIQUE NOT NULL,
      password_hash TEXT NOT NULL,
      first_name TEXT NOT NULL,
      last_name TEXT NOT NULL DEFAULT '',
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
