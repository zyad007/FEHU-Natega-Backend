import { query } from "../db";
import { Session } from "../interfaces/Session";
import { BaseModel } from "./base.model";

export class SessionModelNew extends BaseModel<Session, SessionModelNew>('sessions', () => SessionModelNew) implements Session {

    id: number;
    startDate: Date;
    userId: number;

    constructor(session: Session) {
        super();
        Object.assign(this, session);
    }

}

export class SessionModel implements Session {

    public id: number;
    public startDate: Date;
    public userId: number;

    constructor(session: Session) {
        Object.assign(this, session);
    }

    public static async save(session: Session): Promise<SessionModel | undefined> {
        const { rows } = await query('INSERT INTO sessions (createdAt, user_id) VALUES ($1,$2)', [session.startDate, session.userId])

        if(!rows.length) return undefined;

        const sessionDb: Session = rows[0];
        return new SessionModel(sessionDb);
    }

    public static async getById(id: number): Promise<SessionModel | undefined> {
        const { rows } = await query('SELECT * FROM sessions WHERE id=$1', [id]);
        
        if (!rows.length) return undefined;

        const session: Session = rows[0];
        return new SessionModel(session);
    }

    public static async getByUserId(userId: number): Promise<SessionModel[] | undefined> {
        const { rows } = await query('SELECT * FROM sessions WHERE user_id=$1', [userId]);
        
        if (!rows.length) return undefined;
        
        const sessions: Session[] = rows;
        return sessions.map(x => new SessionModel(x));
    }

    public static async deleteById(id: number): Promise<boolean> {
        const { rows } = await query('DELETE FROM sessions WHERE id=$1 IS TRUE RETURNING *', [id]);

        return !!rows.length;
    }

    public static async deleteByUserId(userId: number): Promise<number> {
        const { rows } = await query('DELETE FROM sessions WHERE user_id=$1 IS TRUE RETURNING *', [userId]);

        return rows.length;
    }

    // private mapQuery(x:any): Session {

    //     const id = parseInt(x.id);
    //     const userId = parseInt(x.userId)


    //     return {
    //         id,

    //     }
    // }
}

