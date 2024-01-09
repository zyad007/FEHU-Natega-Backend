import { Pool } from 'pg'

const pool = new Pool()

export const query = async (text: string, params: any) => {
    return await pool.query(text, params )
}
