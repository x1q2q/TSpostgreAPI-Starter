import { User } from "../model/User";

interface IntUserRepo{
    save(user: User): Promise<void>;
    update(user: User):Promise<void>;
    delete(userId: number): Promise<void>;
    retrieveById(userId: number): Promise<User>;
    retrieveAll(): Promise<User[]>;
}
export class UserRepo implements IntUserRepo{
    async save(user: User): Promise<void> {
        try {
            await User.create({
                username:user.username,
                description: user.description
            });
            console.log("hhhh");

        } catch (error) {
            console.log(error);
            throw new Error("Failed to create user.");
        }
    }
    async update(user: User): Promise<void> {
        try {
            const new_user = await User.findOne({
                where:{
                    id:user.id
                },
            })
            if(!new_user){
                throw new Error("User not found");
            }
            new_user.username = user.username;
            new_user.description = user.description;

            await new_user.save();
        } catch (error) {
            throw new Error("Failed to create user.");
        }
    }
    async delete(userId: number): Promise<void> {
        try {
            const new_user = await User.findOne({
                where:{
                    id:userId
                },
            })
            if(!new_user){
                throw new Error("User not found");
            }
            await new_user.destroy();
        } catch (error) {
            throw new Error("Failed to create user.");
        }
    }
    async retrieveById(userId: number): Promise<User> {
        try {
            const new_user = await User.findOne({
                where:{
                    id:userId
                },
            })
            if(!new_user){
                throw new Error("User not found");
            }
            return new_user;
        } catch (error) {
            throw new Error("Failed to create user.");
        }
    }
    async retrieveAll(): Promise<User[]> {
        try {
            return await User.findAll();
        } catch (error) {
            throw new Error("Failed to create user.");
        }
    }

}