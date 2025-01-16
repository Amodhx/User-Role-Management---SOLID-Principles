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
    async updateUser(req:any,resp:any){
        try {
            const user = await userService.updateUser(req.body)
            resp.status(201).send(user)
        }catch (err){
            resp.status(500).send(err)
        }
    }
    async deleteUser(req:any,resp:any){
        try {
            await userService.deleteUser(req.params.id)
            resp.status(201).send("User Deleted")
        }catch (err){
            resp.status(500).send(err)
        }
    }
    async getAllUsers(req:any,resp:any){
        try {
            resp.status(201).send(await userService.getAllUsers())
        }catch (err){
            resp.status(500).send(err);
        }
    }
}
const userController = new UserController();
export default userController