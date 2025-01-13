import { Pool } from 'pg';
import * as functions from 'firebase-functions';

const pool = new Pool({
  connectionString: functions.config().db.url,
  ssl: {
    rejectUnauthorized: false,
  },
});

export const query = (text: string, params?: any[]) => {
  return pool.query(text, params);
};
