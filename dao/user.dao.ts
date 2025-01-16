import {RoleModel} from "../model/role.model";
import prisma from "../prisma/client";
import {UserModel} from "../model/user.model";

class UserDao{

    async createUser(name:string,roles:RoleModel[]){
        try {
            const roleIds = roles.map((role) => role.id);
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
    async getAllUsers(){
        return await prisma.user.findMany();
    }
    async updateUser(id:number,name:string,roles:RoleModel[]){
        try {
            const roleIds = roles.map((role) => role.id);
            const user:any = await prisma.user.update({
                where: { id },
                data: {
                    name,
                    roles: {
                        deleteMany: {},
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
            console.error('Error in UserDAO.updateUser:', error);
            throw new Error('Failed to update user with roles.');
        }
    }

    async deleteUser(id:number){
        await prisma.user.delete({
            where: { id },
        });
    }
}
const userDao = new UserDao();
export default userDao;