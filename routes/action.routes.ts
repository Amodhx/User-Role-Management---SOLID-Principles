import {Router} from "express";
class ActionRoutes{
    router :Router
    constructor() {
        this.router = Router();
        this.router.get('/healthCheck',this.healthCheck)
    }

    healthCheck(req :any,res:any){
        console.log("Health Check")
        res.status(200).send("API is running correctly!!")
    }
}

const actionRoutes:ActionRoutes = new ActionRoutes();
export default actionRoutes;