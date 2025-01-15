import {Router} from "express";
import rolesController from "../controller/roles.controller";

class RolesRoutes{
    router:Router
    constructor() {
        this.router = Router();
        this.initialRoutes()
    }
    initialRoutes():void{
        this.router.get("/getAllRoles",rolesController.getAllRoles)
        this.router.post("/saveRole",rolesController.saveRole)
        this.router.delete("/deleteRole",rolesController.deleteRole)
        this.router.patch("/updateRole",rolesController.updateRole)
    }
}
const roleRoutes = new RolesRoutes();
export default roleRoutes