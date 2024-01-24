import { Request, RequestHandler, Response, Router } from "express";
import { bodyValidation } from "../middlewares/validtation.middleware";
import { LoginSchema, LoginType } from "../schema/login";
import UserModel from "../models/user.model";
import bcrypt from "bcrypt";
import NotAuthorized from "../errors/NotAuthorized";
import { sign } from "jsonwebtoken";
import { auth } from "../middlewares/auth.middleware";
import { SessionModel } from "../models/session.model";

export const login : RequestHandler = async (req, res, next) => {
    const { username, password }: LoginType = req.body;

    const user = await UserModel.findByUsername(username);
    
    const checkPassword = await bcrypt.compare(password, user.password);
    

    if(!checkPassword) {
        return next(new NotAuthorized('Invalid password'));
    }

    // const newSession = await SessionModel.

    const token = sign({id: user.id, createdAt: Date.now}, process.env.SECRET as string)


    return res.status(200).send({
        token
    })
    
}

export const logout : RequestHandler = async (req, res, next) => {
    
}