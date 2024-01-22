import { NextFunction, Request, Response } from "express";
import RequestWithUser from "../interfaces/RequestWithUser";
import NotAuthorized from "../errors/NotAuthorizedError";
import UserModel from "../models/user.model";
import { decode, verify } from 'jsonwebtoken'
import NotFoundError from "../errors/NotFoundError";
import { Token } from "../interfaces/Token";


export const auth = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return next(new NotAuthorized('Unauthorized'));
    }
    const decoded: Token = verify(token, process.env.SECRET as string) as any;
    try {
        const user = await UserModel.findById(decoded.id);
        if(!user) {
            return next(new NotAuthorized('Invalid token'));
        }
        req.body.user = user
        return next()

    } catch (e) {
        return next(e);
    }
}