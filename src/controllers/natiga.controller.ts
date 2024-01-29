import { RequestHandler } from "express";
import { Department } from "../enum/Department";
import { Year } from "../enum/Year";
import { NatigaGet } from "../schema/natiga.get.params";
import { parse } from "csv-parse/sync";
import { HeaderModel } from "../models/header.model";
import BadRequest from "../errors/BadRequest";

export const getNatiga: RequestHandler<{year: number, dep: number, term: number}> = async (req, res, next) => {

    const year = +req.params.year;
    const dep = +req.params.dep;
    const term = +req.params.term;

    

    return res.send();
}

export const postNatiga: RequestHandler = async (req, res, next) => {
    const year = +req.params.year;
    const dep = +req.params.dep;
    const term = +req.params.term;
    const old = +req.params.old;

    if(term < 1 || term > 2) {
        return next(new BadRequest('Term must be 1 or 2'));
    }

    try {


        const data = await parse(req.file!.buffer)
        console.log(data[0]);
    
        if(old) {
            // const header = await HeaderModel.save({ id:0 , dep:dep, year: year, term: term, sub1: data[0]})

        }


        return res.send()

    }catch(e) {
        return next(e)
    }

}