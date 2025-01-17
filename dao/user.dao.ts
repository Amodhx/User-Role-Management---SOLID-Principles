import {RoleModel} from "../model/role.model";
import prisma from "../prisma/client";

class UserDao{

    async createUser(name:string,roles:RoleModel[]){
        try {
            const roleIds = roles.map((role) => role.id);
            const user:any = await prisma.user.create({
                data: {
                    name,
                    UserRole: {
                        create: roleIds.map((roleId) => ({
                            roleId,
                        })),
                    },
                },
                include: {
                    UserRole: {
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
        return prisma.user.findMany();
    }
    async updateUser(id:any,name:string,roles:RoleModel[]){
        try {
            const roleIds = roles.map((role) => role.id);
            id = Math.floor(id);
            const user:any = await prisma.user.update({
                where: { id },
                data: {
                    name,
                    UserRole: {
                        create: roleIds.map((roleId) => ({
                            roleId,
                        })),
                    },
                },
                include: {
                    UserRole: {
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

    async deleteUser(id:any){
        id = Math.floor(id);
        await prisma.user.delete({
            where: { id },
        });
    }
}
export default UserDao;