import { Request, Response, Router } from "express";
import { bodyValidation } from "../middlewares/validtation.middleware";
import { LoginSchema, LoginType } from "../schema/login";
import * as accountController from '../controllers/account.controller';
import { auth } from "../middlewares/auth.middleware";

const accountRouter = Router();

accountRouter.post('/login', bodyValidation(LoginSchema) , accountController.login );

accountRouter.post('/logout', auth , bodyValidation(LoginSchema) , accountController.logout );

export default accountRouter;