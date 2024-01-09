import { RequestHandler } from "express";
import NotFoundError from "../errors/NotFoundError";
import * as db from '../db/index'

export const addGrade: RequestHandler = ( req, res ) => {
    const name = req.body.name;

    console.log(req.body);
    console.log('Added grade with name: ' + name);

    res.status(201).send({ message: 'added grade successfully' })
}

export const getGrades: RequestHandler = async (req, res) => {

    const {rows} = await db.query('SELECT * FROM grade', [])

    console.log(rows);
    
    res.send()
} 

export const deleteGrade: RequestHandler<{id:string}> = (req, res) => {
    console.log(req.params.id);

    res.status(200).send({ message: 'deleted succesfully' })
}