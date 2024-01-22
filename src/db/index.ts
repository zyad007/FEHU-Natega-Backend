import { DatabaseError, Pool } from 'pg'
import DataBaseError from '../errors/DatabaseError';

const pool = new Pool();
pool.on('connect', () => {
    console.log('Connected to DB on: ' + Date.now());
})

export const query = async (text: string, params: any) => {
    return await pool.query(text, params ) 
}