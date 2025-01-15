import {Router} from "express";
import actionsController from "../controller/actions.controller.ts";
class ActionRoutes{
    router :Router
    constructor() {
        this.router = Router();
        this.initialRoutes()
    }
    initialRoutes():void{
        this.router.get('/healthCheck',this.healthCheck)
        this.router.get("/getAllActions",actionsController.getAllActions);
        this.router.post("/saveAction",actionsController.saveAction);
        this.router.patch("/updateAction",actionsController.updateAction)
        this.router.delete("/deleteAction",actionsController.deleteAction)
    }
    healthCheck(req :any,res:any){
        console.log("Health Check")
        res.status(200).send("API is running correctly!!")
    }
}
const actionRoutes:ActionRoutes = new ActionRoutes();
export default actionRoutes;