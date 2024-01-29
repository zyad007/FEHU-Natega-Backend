import { Router } from "express";
import * as userController from '../controllers/user.controller'
import { userErrorHandler } from "../middlewares/user.hanlder.middleware";
import { bodyValidation } from "../middlewares/validtation.middleware";
import { UserCreateSchema } from "../schema/user.create.body";
import { auth } from "../middlewares/auth.middleware";


const userRouter = Router();

userRouter.get('/', userController.getAll)

userRouter.get('/:id', userController.getUserById);

userRouter.post('/', auth , bodyValidation(UserCreateSchema) , userController.createUser);

userRouter.delete('/:id', userController.deleteById)


userRouter.use(userErrorHandler)

export default userRouter;