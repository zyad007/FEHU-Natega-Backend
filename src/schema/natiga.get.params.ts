import { z } from "zod";
import { Department } from "../enum/Department";
import { Year } from "../enum/Year";

export const NatigaGetSchema = z.object({

    dep: z.nativeEnum(Department),
    year: z.nativeEnum(Year),
    term: z.number()
});

export type NatigaGet = z.infer<typeof NatigaGetSchema>;