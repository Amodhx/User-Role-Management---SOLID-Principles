import e, {Router} from "express";
import userController from "../controller/user.controller";

class UserRoutes{
    router:Router
    constructor() {
        this.router = Router();
        this.initialRoutes();
    }
    initialRoutes():void{
        this.router.get("/getAllUsers",userController.getAllUsers)
        this.router.post("/saveUser",userController.saveUser)
        this.router.delete("/deleteUser",userController.deleteUser)
        this.router.patch("/updateUser",userController.updateUser)
    }
}
const userRoutes = new UserRoutes();
export default userRoutes;