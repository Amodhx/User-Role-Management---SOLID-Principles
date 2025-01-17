import {Router} from "express";
import UserController from "../controller/user.controller";
import UserService from "../service/user.service";
import UserDao from "../dao/impl/user.dao";

class UserRoutes{
    router:Router
    userController : UserController;
    userService : UserService;
    userDAO : UserDao;
    constructor() {
        this.router = Router();
        this.userDAO = new UserDao();
        this.userService = new UserService(this.userDAO);
        this.userController = new UserController(this.userService);
        this.initialRoutes();
    }
    initialRoutes():void{
        this.router.get("/getAllUsers",this.userController.getAllUsers)
        this.router.post("/saveUser",this.userController.saveUser)
        this.router.delete("/deleteUser",this.userController.deleteUser)
        this.router.patch("/updateUser",this.userController.updateUser)
    }
}
const userRoutes = new UserRoutes();
export default userRoutes;