import {  z } from "zod";

export const Usernamevalidation = z
  .string()
  .min(2, "username must be atleast 2 char")
  .max(20, "no more than that number").regex( /^[a-zA-Z0-9]([._-]?[a-zA-Z0-9]){2,15}$/, "username not contain that")
  
export  const Signupschema = z.object({
    username:Usernamevalidation,
    email:  z.string().email(),
    password: z.string().min(5,{message:"pasword must b more than that"})

})