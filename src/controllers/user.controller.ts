import { RequestHandler } from "express";
import UserModel from "../models/user.model";
import CustomError from "../errors/CustomError";
import User from "../interfaces/User";
import { UserCreateType } from "../schema/user.create";
import BadRequest from "../errors/BadRequest";

export const getUserById: RequestHandler<{ id: number }> = async (req, res, next) => {
    try {

        const id = req.params.id;
        const user = await UserModel.findById(id);
        res.status(200).send(user)

    }catch(e) {
        next(e)
    }
}

export const createUser: RequestHandler = async (req, res, next) => {
    try {
        
        const userReq: UserCreateType = req.body;

        const exists = await UserModel.findByUsername(userReq.username); 
        if(exists)
            return next(new BadRequest('Username already taken'))

        const user = await UserModel.create(userReq.username, userReq.password);
        return res.status(200).send(user)

    }catch(e) {
        return next(e)
    }
}

export const getAll: RequestHandler = async (req, res, next) => {
    try {

        const users = await UserModel.getAll();
        return res.status(200).send(users)

    }catch(e) {
        return next(e)
    }
}
export const deleteById:RequestHandler<{id:number}> = async (req,res,next) => {
    try{

        const user = await UserModel.findById(req.params.id);
        await UserModel.deleteById(user.id);
        return res.status(200).send({
            message: 'Deleted succesfully'
        })

    }catch(e) {
        return next(e)
    }
}

