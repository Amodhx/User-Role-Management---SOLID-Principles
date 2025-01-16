import {UserModel} from "../model/user.model";
import userDao from "../dao/user.dao";

class UserService{

    async saveUser(userData : UserModel){
        return await userDao.createUser(userData.name,userData.roles);
    }
}
const userService = new UserService();
export default userService;