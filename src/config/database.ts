import { Sequelize } from "sequelize-typescript";
import { User } from "../model/User";
import * as dotenv from "dotenv";
dotenv.config();

class Database{
    public sequelize: Sequelize | undefined
    private POSTGRES_DB     = process.env.POSTGRES_DB as string;
    private POSTGRES_HOST   = process.env.POSTGRES_HOST as string;
    private POSTGRES_PORT   = process.env.POSTGRES_PORT as unknown as number;
    private POSTGRES_USER   = process.env.POSTGRES_USER as string;
    private POSTGRES_PASSWORD= process.env.POSTGRES_PASSWORD as string;

    constructor(){
        this.connectToPGSQL();
    }
    private async connectToPGSQL(){
        this.sequelize = new Sequelize({
            database: this.POSTGRES_DB,
            username: this.POSTGRES_USER,
            password: this.POSTGRES_PASSWORD,
            host: this.POSTGRES_HOST,
            port: this.POSTGRES_PORT,
            dialect: "postgres",
            models: [User]
        });

        this.sequelize.authenticate().then(() =>{ 
            console.log("Connection has been established succesfully!");
        }).catch((err)=>{
            console.log("Unable to connect with database :(");
        });
    }
}
export default Database