import { Department } from "../enum/Department";
import { Year } from "../enum/Year";
import { Header } from "../interfaces/Header";
import { BaseModel } from "./base.model";

export class HeaderModel extends BaseModel<Header, HeaderModel>('headers', () => HeaderModel) implements Header {

    constructor(header: Header ) {
        super(header.id);
        Object.assign(this, header)
    }

    dep: Department;
    year: Year;
    term: 1 | 2;

    sub1?: string | undefined;
    sub2?: string | undefined;
    sub3?: string | undefined;
    sub4?: string | undefined;
    sub5?: string | undefined;
    sub6?: string | undefined;

    sub1Max?: number | 0;
    sub2Max?: number | 0;
    sub3Max?: number | 0;
    sub4Max?: number | 0;
    sub5Max?: number | 0;
    sub6Max?: number | 0;

    sub1Avg?: number | 0;
    sub2Avg?: number | 0;
    sub3Avg?: number | 0;
    sub4Avg?: number | 0;
    sub5Avg?: number | 0;
    sub6Avg?: number | 0;
    
    totalAvg: number;
    totalMax: number;

}
