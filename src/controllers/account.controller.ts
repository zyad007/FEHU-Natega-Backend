import { Request, RequestHandler, Response, Router } from "express";
import { bodyValidation } from "../middlewares/validtation.middleware";
import { LoginSchema, LoginType } from "../schema/login";
import UserModel from "../models/user.model";
import bcrypt from "bcrypt";
import NotAuthorized from "../errors/NotAuthorized";
import { sign } from "jsonwebtoken";
import { auth } from "../middlewares/auth.middleware";
import { SessionModel, SessionModelNew } from "../models/session.model";
import { Token } from "../interfaces/Token";
import NotFound from "../errors/NotFound";
import CustomError from "../errors/CustomError";
import { Result } from "../dto/Result";

export const login : RequestHandler = async (req, res, next) => {
    const { username, password }: LoginType = req.body;

    const user = await UserModel.findByUsername(username);
    
    const checkPassword = await bcrypt.compare(password, user.password);
    

    if(!checkPassword) {
        return next(new NotAuthorized('Invalid password'));
    }

    const session = await SessionModelNew.save({
        id: 0,
        startDate: new Date(),
        userId: user.id
    });

    const tokenObj: Token = {id: user.id, createdAt: new Date(), session: session!};

    const token = sign(tokenObj , process.env.SECRET as string)

    return res.status(200).send({
        token
    })
    
}

export const logout : RequestHandler = async (req, res, next) => {
    console.log(req.body);

    const session = await SessionModelNew.getById(req.body.token?.session.id);

    if(!session) return next(new NotFound('Session not found'));

    const deleted = await SessionModelNew.deleteById(session.id);

    if(!deleted) return next(new CustomError('SOMETHING', 'Something went wrong'));

    return res.status(200).send(new Result(
        true,
        'Loged out successfully!'
    ))
}