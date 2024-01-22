import { Request, Response, Router } from "express";
import { bodyValidation } from "../middlewares/validtation.middleware";
import { LoginSchema, LoginType } from "../schema/login";
import UserModel from "../models/user.model";
import bcrypt from "bcrypt";
import NotAuthorized from "../errors/NotAuthorizedError";
import { sign } from "jsonwebtoken";
import { auth } from "../middlewares/auth.middleware";

const accountRouter = Router();

accountRouter.post('/login', bodyValidation(LoginSchema) , async (req: Request, res: Response, next: Function) => {
    const { username, password }: LoginType = req.body;

    const user = await UserModel.findByUsername(username);
    
    const checkPassword = await bcrypt.compare(password, user.password);
    

    if(!checkPassword) {
        return next(new NotAuthorized('Invalid password'));
    }

    const token = sign({id: user.id, createdAt: Date.now}, process.env.SECRET as string)


    return res.status(200).send({
        token
    })
    
})

export default accountRouter;