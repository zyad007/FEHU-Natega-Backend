import User from "../interfaces/User";
import * as db from '../index'
import { query } from "../db";
import NotFoundError from "../errors/NotFoundError";
import CustomError from "../errors/CustomError";
import DataBaseError from "../errors/DatabaseError";
import { DatabaseError } from "pg";
import { hash } from "bcrypt";

type Constructor<T> = { new(...args: any[]): T }

export default class UserModel implements User {

    id: number;
    username: string;
    password: string;

    constructor(user: User) {
        this.id = user.id;
        this.username = user.username;
        this.password = user.password;
    }

    public static async findById(id: number): Promise<UserModel> {

        const { rows } = await query('SELECT * FROM admins WHERE id=$1', [id])
        const user: User = rows[0]

        if (!user) {
            throw new NotFoundError(
                `There is no User with ID : ${id}`
            )
        }

        return new UserModel(user);

    }

    public static async create(username: string, password: string): Promise<UserModel> {
        const passwordHash = await hash(password, 10);

        const { rows } = await query('INSERT INTO admins (username, password) VALUES ($1,$2) RETURNING *', [username, passwordHash])
        const user: User = rows[0];
        return new UserModel(user);
    }

    public static async getAll(): Promise<UserModel[]> {
        const {rows} = await query('SELECT * FROM admins', []);
        const users: User[] = rows;

        return users.map(x => new UserModel(x));
    }

    public static async findByUsername(username: string): Promise<UserModel> {
        const {rows} = await query('SELECT * FROM admins WHERE username = $1', [username]);
        const user: User = rows[0];
        return user;
    }

    public static async deleteById(id: number): Promise<undefined> {
        await query('DELETE FROM admins WHERE id=$1', [id]);
        return
    }
}