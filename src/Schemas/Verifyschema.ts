import { z } from "zod";


export const verifyschema = z.object({
    code:z.string().length(6,'verifaction code must be 6 digit')
})