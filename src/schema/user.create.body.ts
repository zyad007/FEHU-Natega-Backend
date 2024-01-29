import { z } from 'zod'
import { UsernameSchema } from './schema.username'
import { PassowrdSchema } from './schema.password'

export const UserCreateSchema = z.object({
    username: UsernameSchema,
    password: PassowrdSchema
})

export type UserCreateType = z.infer<typeof UserCreateSchema>