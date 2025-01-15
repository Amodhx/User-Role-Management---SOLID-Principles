import {Router} from "express";
import actionRoutes from "./action.routes.ts"
import rolesRoutes from "./roles.routes";
import userRoutes from "./user.routes";
class MainRouter{
    router : Router;

    constructor() {
        this.router = Router();
        this.router.use('/action',actionRoutes.router)
        this.router.use('/roles',rolesRoutes.router)
        this.router.use('/user',userRoutes.router)
    }
}
const mainRouter :MainRouter = new MainRouter();
export default mainRouter;