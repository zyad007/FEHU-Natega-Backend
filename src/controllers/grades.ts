import { RequestHandler } from "express";
import NotFoundError from "../errors/NotFoundError";

export const addGrade: RequestHandler = ( req, res ) => {
    const name = req.body.name;

    console.log(req.body);
    console.log('Added grade with name: ' + name);

    res.status(201).send({ message: 'added grade successfully' })
}

export const getGrades: RequestHandler = (req, res) => {

    if( 1 === 1) {
        throw new NotFoundError('Error GET grades', 1)
    }

    res.status(200).send([
        {name: "Zyad"},
        {name: "Anazz"}
    ])
} 

export const deleteGrade: RequestHandler<{id:string}> = (req, res) => {
    console.log(req.params.id);

    res.status(200).send({ message: 'deleted succesfully' })
}