import { NextFunction, Response } from "express";
import RequestWithUser from "../interfaces/RequestWithUser";
import NotAuthorized from "../errors/NotAuthorizedError";

const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.SECRET)
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

        if(!user) throw new Error()
        
        req.user = user
        
        next()
    } catch (error) {
        next(new NotAuthorized("Not Authorized", 1000))
    }
}

module.exports = auth;