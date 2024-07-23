import {z} from "zod"



 export const Signinverfaction = z.object({
    email: z.string(),
    password:z.string()
})