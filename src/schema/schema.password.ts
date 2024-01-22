import { z } from "zod";

export const PassowrdSchema = z.string({
    required_error: 'Username is required'
})
.trim()
.min(6)