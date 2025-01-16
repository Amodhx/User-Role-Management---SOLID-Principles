import {UserModel} from "../model/user.model";
import prisma from "../prisma/client";

class RoleDao{

    async createRole(name:string,users:UserModel[]){
        try {
            const userIds = users.map((user) => user.id).filter((id): id is number => id !== undefined);
            const role:any = await prisma.role.create({
                data: {
                    name,
                    users: {
                        create: userIds.map((userId:number) => ({
                            userId,
                        })),
                    },
                },
                include: {
                    users: {
                        include: {
                            user: true,
                        },
                    },
                },
            });

            return role;
        } catch (error) {
            console.error('Error in RoleDAO.createRole:', error);
            throw new Error('Failed to create role with users.');
        }
    }
    async deleteRole(id:number){
        id = Math.floor(id)
        await prisma.role.delete({
            where: {id},
        });
    }
    async updateRole(id:number,name:string,users:UserModel[]){
        id = Math.floor(id);
        try {
            const userIds = users
                .map((user) => user.id)
                .filter((id): id is number => id !== undefined)
                .map((id) => Math.floor(id));
            const role:any = await prisma.role.update({
                where : {id},
                data: {
                    name,
                    users: {
                        create: userIds.map((userId:number) => ({
                            userId,
                        })),
                    },
                },
                include: {
                    users: {
                        include: {
                            user: true,
                        },
                    },
                },
            });

            return role;
        } catch (error) {
            console.error('Error in RoleDAO.createRole:', error);
            throw new Error('Failed to create role with users.');
        }
    }
    async getAllRoles(){
        return prisma.role.findMany({
            include: {
                users: {
                    include: {
                        user: true,
                    },
                },
            },
        });
    }
}
const roleDao = new RoleDao();
export default roleDao