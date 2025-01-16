import {UserModel} from "../model/user.model";
import prisma from "../prisma/client";

class UserService{

    async createUser(userData : UserModel){
        return prisma.user.create({
            data: {
                name: userData.name,
            },
        });
    }
}
const userService = new UserService();
export default userService;