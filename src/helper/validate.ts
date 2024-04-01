import{ Request, Response, NextFunction } from "express";
import { AnyZodObject } from "zod";

const validate = 
    (schema: AnyZodObject) => 
        async (req: Request, res: Response, next: NextFunction) => {
            try {
                await schema.parseAsync({
                    body: req.body,
                    query: req.query,
                    params: req.params
                });
                return next();
            } catch (err: any) {
                const err_msg = JSON.parse(err.message);
                return res.status(400).json({
                    status: "Bad Request",
                    message: err_msg[0].message
                });
            }
        };
 export default validate;