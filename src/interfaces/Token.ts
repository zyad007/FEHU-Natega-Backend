import { Session } from "./Session";

export interface Token {
    id: number,
    createdAt: Date,
    session: Session
}