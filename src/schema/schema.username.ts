import { z } from "zod";

export const UsernameSchema = z.string({
    required_error: 'Username is required'
})
.trim()
.min(6)