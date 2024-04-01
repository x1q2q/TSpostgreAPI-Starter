import { Router } from "express";
import IntRouter from "./RouterInterface";

abstract class BaseRoutes implements IntRouter{
    public router: Router
    constructor(){
        this.router = Router();
        this.routes();
    }
    abstract routes(): void;
}
export default BaseRoutes;