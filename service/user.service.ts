import {UserModel} from "../model/user.model";
import userDao from "../dao/user.dao";

class UserService{

    async saveUser(userData : UserModel){
        return await userDao.createUser(userData.name,userData.roles);
    }
    async getAllUsers(){
        return await userDao.getAllUsers();
    }
    async updateUser(userData:UserModel){
        return await userDao.updateUser(userData.id,userData.name,userData.roles);
    }
    async deleteUser(id:number){
        return await userDao.deleteUser(id);
    }
}
const userService = new UserService();
export default userService;