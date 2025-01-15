import {Router} from "express";

class RolesRoutes{
    router:Router
    constructor() {
        this.router = Router();

    }
}

const roleRoutes = new RolesRoutes();
export default roleRoutes