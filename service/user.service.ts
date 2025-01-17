import {UserModel} from "../model/user.model";
import UserDao from "../dao/user.dao";

class UserService{
    userDao : UserDao;
    constructor(userDAO : UserDao) {
        this.userDao = userDAO;
    }

    async saveUser(userData : UserModel){
        return await this.userDao.createUser(userData.name,userData.roles);
    }
    async getAllUsers(){
        return await this.userDao.getAllUsers();
    }
    async updateUser(userData:UserModel){
        return await this.userDao.updateUser(userData.id ,userData.name,userData.roles);
    }
    async deleteUser(id:number){
        return await this.userDao.deleteUser(id);
    }
}
export default UserService;