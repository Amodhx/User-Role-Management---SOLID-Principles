import {Router} from "express";
import ActionsController from "../controller/actions.controller.ts";
import ActionsDao from "../dao/impl/actions.dao";
import ActionsService from "../service/actions.service";
class ActionRoutes{
    router :Router
    actionController:ActionsController ;
    actionDao:ActionsDao;
    actionService:ActionsService;
    constructor() {
        this.router = Router();
        this.actionDao = new ActionsDao();
        this.actionService = new ActionsService(this.actionDao);
        this.actionController = new ActionsController(this.actionService);

        this.initialRoutes()
    }
    initialRoutes():void{
        this.router.get('/healthCheck',this.healthCheck)
        this.router.get("/getAllActions",this.actionController.getAllActions);
        this.router.post("/saveAction",this.actionController.saveAction);
        this.router.patch("/updateAction",this.actionController.updateAction)
        this.router.delete("/deleteAction",this.actionController.deleteAction)
    }
    healthCheck(req :any,res:any){
        console.log("Health Check")
        res.status(200).send("API is running correctly!!")
    }
}
const actionRoutes:ActionRoutes = new ActionRoutes();
export default actionRoutes;