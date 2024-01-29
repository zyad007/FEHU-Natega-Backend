import { Department } from "../enum/Department";
import { Year } from "../enum/Year";
import Base from "./Base";

export interface Student extends Base { 

    sid: number,    
    
    rank?: number,
    
    sub1?: number,
    sub2?: number,
    sub3?: number,
    sub4?: number,
    sub5?: number,
    sub6?: number,
    
    total: number,

    rank1?: number,
    rank2?: number,
    rank3?: number,
    rank4?: number,
    rank5?: number,
    rank6?: number,

    headerId: number
}