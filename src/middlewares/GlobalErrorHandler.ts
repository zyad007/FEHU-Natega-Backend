import { NextFunction, Request, Response } from "express";

export const globalErrorHandler = (err: Error, req: Request, res: Response, next: NextFunction ) => {

    res.status(500).send(
        {
            handler: 'GLOBAL_ERROR_HANDLER',
            code: 0,
            name: err.name,
            message: err.message || 'Something failed!',
        }
    )

}