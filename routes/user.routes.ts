import e, {Router} from "express";

class UserRoutes{
    router:Router
    constructor() {
        this.router = Router();

    }
}
const userRoutes = new UserRoutes();
export default userRoutes;