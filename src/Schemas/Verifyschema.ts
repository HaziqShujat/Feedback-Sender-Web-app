import { z } from "zod";


export const verifyschema = z.string().min(3)