import { NextFunction, Request, Response } from "express"
import CustomError from "../errors/CustomError"
import BadRequest from "../errors/BadRequest"
import { DatabaseError } from "pg";
import NotAuthorized from "../errors/NotAuthorizedError";

export const accountErrorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {

    const handler = 'ACCOUNT_HANDLER';

    if(err instanceof BadRequest) {
        return res.status(400).send({
            handler: handler,
            ...err,
            message: err.message
        })
    }

    if(err instanceof DatabaseError) {
        return res.status(500).send({
            handler: handler,
            name: 'DataBaseError',
            message: err.message
        })
    }

    if(err instanceof NotAuthorized) {
        return res.status(401).send({
            handler: handler,
            ...err,
            message: err.message
        })
    }

    return next(err)

}