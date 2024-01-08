import { NextFunction, Request, Response } from "express"
import CustomError from "../errors/CustomError"

export const gradeErrorHanlder = (err: CustomError, req: Request, res: Response, next: NextFunction) => {

    res.status(500).send({
        handler: 'GRADES_HANDLER',
        code: err.code ,
        name: err.name ,
        message: err.message || 'Something failed!' ,
    })

}

