import { Department } from "../enum/Department";
import { Year } from "../enum/Year";
import Base from "./Base";

export interface Header extends Base {

    dep: Department,
    year: Year,
    term: number,

    sub1?:string,
    sub2?:string,
    sub3?:string,
    sub4?:string,
    sub5?:string,
    sub6?:string,

    sub1Max?: number,
    sub2Max?: number,
    sub3Max?: number,
    sub4Max?: number,
    sub5Max?: number,
    sub6Max?: number,

    sub1Avg?: number,
    sub2Avg?: number,
    sub3Avg?: number,
    sub4Avg?: number,
    sub5Avg?: number,
    sub6Avg?: number,

    totalAvg: number,
    totalMax: number
}