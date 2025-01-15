import {Router} from "express";
import actionRoutes from "./action.routes.ts"
class MainRouter{
    router : Router;

    constructor() {
        this.router = Router();
        this.router.use('/action',actionRoutes.router)
    }
}
const mainRouter :MainRouter = new MainRouter();
export default mainRouter;