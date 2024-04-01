import {z} from "zod";

export const createUserSchema = z.object({
    body: z.object({
        username: z.string().min(1,{message:"username must be greater than 1 characters"}),
        description:z.string().min(4,{message:"description must be greater than 4 characters"}),
    }),
});

export const updateUserSchema= z.object({
    params:z.object({id:z.string()}),
    body: z.object({
        username: z.string().min(1,{message:"username must be greater than 1 characters"}),
        description:z.string().min(4,{message:"description must be greater than 4 characters"}),
    }).partial(),
});