import {RoleModel} from "../model/role.model";
import prisma from "../prisma/client";
import {UserModel} from "../model/user.model";

class UserDao{

    async createUser(name:string,roles:RoleModel[]){
        const roleIds:number[] = []
        roles.map((role:RoleModel) =>{
            roleIds.push(role.id)
        })
        try {
            const user:any = await prisma.user.create({
                data: {
                    name,
                    roles: {
                        create: roleIds.map((roleId) => ({
                            roleId,
                        })),
                    },
                },
                include: {
                    roles: {
                        include: {
                            role: true,
                        },
                    },
                },
            });

            return user;
        } catch (error) {
            console.error('Error in UserDAO.createUser:', error);
            throw new Error('Failed to create user with roles.');
        }
    }
}
const userDao = new UserDao();
export default userDao;