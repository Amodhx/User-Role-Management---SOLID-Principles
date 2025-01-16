import userService from "../service/user.service";

class UserController{

    async saveUser(req:any,resp:any){
        try {
            const user = await userService.saveUser(req.body);
            resp.status(201).send(user)
        }catch (e){
            resp.status(500).send("INTERNAL SERVER ERROR")
        }
    }
    updateUser(req:any,resp:any):void{

    }
    deleteUser(req:any,resp:any):void{

    }
    getAllUsers(req:any,resp:any):void{

    }
}
const userController = new UserController();
export default userController