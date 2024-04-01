import {Model, Table, Column, DataType} from "sequelize-typescript";

@Table({
    tableName:User.USER_TABLE_NAME,
    modelName: "User",
    timestamps: false
})
export class User extends Model{
    public static USER_TABLE_NAME = "users" as string;
    public static USER_ID = "id" as string;
    public static USER_USERNAME = "username" as string;
    public static USER_DESCRIPTION = "description" as string;

    @Column({
        type:DataType.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        field:User.USER_ID
    })id! : number;

    @Column({
        type: DataType.STRING(30),
        field:User.USER_USERNAME
    })username!: string;

    @Column({
        type: DataType.STRING(80),
        field:User.USER_DESCRIPTION
    })description!: string;
}
