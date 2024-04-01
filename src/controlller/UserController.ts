import { Request, Response } from "express";
import { User } from "../model/User";
import { UserRepo } from "../repository/UserRepo";

class UserController{
    async create(req: Request, res: Response){
        try {
            const new_user = new User();
            new_user.username = req.body.username;
            new_user.description = req.body.description;
            await new UserRepo().save(new_user);
            console.log(new_user);

            res.status(201).json({
                status:"created",
                message:"succesfully created user!"
            })
        } catch (err) {
            console.log(err);
            res.status(500).json({
                status:"Error",
                message:"Inernal Server Error"
            });
        }
    }

    async update(req: Request, res: Response){
        try {
            let id = parseInt(req.params["id"]);
            const new_user = new User();

            new_user.id = id;
            new_user.username= req.body.username;
            new_user.description = req.body.description;

            await new UserRepo().update(new_user);

            res.status(200).json({
                status:"ok",
                message:"succesfully update user",
                data:new_user
            })
        } catch (err) {
            res.status(500).json({
                status:"Error",
                message:"Inernal Server Error"
            });
        }
    }
    async delete(req: Request, res: Response){
        try {
            let id = parseInt(req.params["id"]);
            await new UserRepo().delete(id);

            res.status(200).json({
                status:"ok",
                message:"succesfully deleting user"
            })
        } catch (err) {
            res.status(500).json({
                status:"Error",
                message:"Inernal Server Error"
            });
        }
    }
    async findAll(req: Request, res: Response){
        try {
            const new_user = await new UserRepo().retrieveAll();
            res.status(200).json({
                status:"ok",
                message:"succesfully fetched all users",
                data:new_user
            })
        } catch (err) {
            res.status(500).json({
                status:"Error",
                message:"Inernal Server Error"
            });
        }
    }

    async findId(req: Request, res: Response){
        try {
            let id = parseInt(req.params["id"]);
            const new_user = await new UserRepo().retrieveById(id);

            res.status(200).json({
                status:"ok",
                message:"succesfully fetched user",
                data: new_user
            })
        } catch (err) {
            res.status(500).json({
                status:"Error",
                message:"Inernal Server Error"
            });
        }
    }
}
export default new UserController();