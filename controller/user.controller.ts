import UserService from "../service/user.service";

class UserController{
    userService:UserService;
    constructor(userService:UserService) {
        this.userService = userService;
    }

    async saveUser(req:any,resp:any){
        try {
            const user = await this.userService.saveUser(req.body);
            resp.status(201).send(user)
        }catch (e){
            resp.status(500).send("INTERNAL SERVER ERROR")
        }
    }
    async updateUser(req:any,resp:any){
        try {
            const user = await this.userService.updateUser(req.body)
            resp.status(201).send(user)
        }catch (err){
            resp.status(500).send(err)
        }
    }
    async deleteUser(req:any,resp:any){
        try {
            await this.userService.deleteUser(req.query['id'])
            resp.status(201).send("User Deleted")
        }catch (err){
            resp.status(500).send(err)
        }
    }
    async getAllUsers(req:any,resp:any){
        try {
            resp.status(201).send(await this.userService.getAllUsers())
        }catch (err){
            resp.status(500).send(err);
        }
    }
}
export default UserController