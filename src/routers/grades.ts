import { NextFunction, Request, Response, Router } from "express";
import { addGrade, deleteGrade, getGrades } from "../controllers/grades";
import { gradeErrorHanlder } from "../middlewares/GradeErrorHandler";

const gradeRouter = Router();

gradeRouter.post('/', addGrade);

gradeRouter.get('/', getGrades);

gradeRouter.delete('/:id', deleteGrade);

gradeRouter.patch('/:id');


gradeRouter.use(gradeErrorHanlder)

export default gradeRouter;