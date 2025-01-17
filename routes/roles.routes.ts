import {Router} from "express";
import RolesController from "../controller/roles.controller";
import RolesService from "../service/roles.service";
import RoleDao from "../dao/impl/role.dao";

class RolesRoutes{
    router:Router
    rolesController : RolesController;
    rolesService : RolesService;
    rolesDAO : RoleDao;
    constructor() {
        this.router = Router();
        this.rolesDAO = new RoleDao();
        this.rolesService = new RolesService(this.rolesDAO);
        this.rolesController = new RolesController(this.rolesService);
        this.initialRoutes()
    }
    initialRoutes():void{
        this.router.get("/getAllRoles",this.rolesController.getAllRoles)
        this.router.post("/saveRole",this.rolesController.saveRole)
        this.router.delete("/deleteRole",this.rolesController.deleteRole)
        this.router.patch("/updateRole",this.rolesController.updateRole)
    }
}
const roleRoutes = new RolesRoutes();
export default roleRoutes