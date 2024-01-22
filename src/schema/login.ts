import {z} from 'zod'
import { UsernameSchema } from './schema.username'
import { PassowrdSchema } from './schema.password'

export const LoginSchema = z.object({
    username: UsernameSchema,
    password: PassowrdSchema
}) 

export type LoginType = z.infer<typeof LoginSchema>