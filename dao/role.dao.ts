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

    }
    async getAllRoles(){

    }
}
const roleDao = new RoleDao();
export default roleDao