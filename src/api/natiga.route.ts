import { Router } from "express";
import * as NatigaController from '../controllers/natiga.controller'
import { paramValidation } from "../middlewares/validtation.middleware";
import { NatigaGetSchema } from "../schema/natiga.get.params";
import multer from "multer";

const storage = multer.memoryStorage()

const upload = multer({storage: storage});

const natigaRouter = Router();

natigaRouter.get('/:dep/:year/:term' , NatigaController.getNatiga )

natigaRouter.post('/:dep/:year/:term/:old', upload.single('natiga') , NatigaController.postNatiga )


export default natigaRouter