import {UserModel} from "../model/user.model";
import UserDao from "../dao/impl/user.dao";

class UserService{
    userDao : UserDao;
    constructor(userDAO : UserDao) {
        this.userDao = userDAO;
    }

    async saveUser(userData : UserModel){
        return await this.userDao.create(userData.name,userData.roles);
    }
    async getAllUsers(){
        return await this.userDao.findAll();
    }
    async updateUser(userData:UserModel){
        return await this.userDao.update(userData.id ,userData.name,userData.roles);
    }
    async deleteUser(id:number){
        return await this.userDao.delete(id);
    }
}
export default UserService;