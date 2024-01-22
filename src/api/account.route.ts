import { Request, Response, Router } from "express";
import { bodyValidation } from "../middlewares/validtation.middleware";
import { LoginSchema, LoginType } from "../schema/login";
import * as accountController from '../controllers/account.controller';

const accountRouter = Router();

accountRouter.post('/login', bodyValidation(LoginSchema) , accountController.login );

export default accountRouter;