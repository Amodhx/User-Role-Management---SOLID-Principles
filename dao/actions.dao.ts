import {RoleModel} from "../model/role.model";
import prisma from "../prisma/client";

class ActionsDao{
    async createAction(name:string,roles:RoleModel[]){
        try {
            let roleIds = roles.map((role:RoleModel) => role.id);
            const action:any = await prisma.action.create({
                data : {
                    name,
                    permissions : {
                        create : roleIds.map((roleId) =>({
                            roleId
                        })),
                    },
                },
                include : {
                    permissions : {
                        include : {
                            role : true
                        }
                    }
                }
            });
            return action;
        }catch (err){
            console.error('Error in UserDAO.createUser:', err);
            throw new Error('Failed to create user with roles.');
        }
    }
    async updateAction(id:number,name:string,roles:RoleModel[]){
        id = Math.floor(id);
        try {
            let roleIds = roles.map((role:RoleModel) => role.id);
            const action:any = await prisma.action.update({
                where : {id},
                data : {
                    name,
                    permissions : {
                        create : roleIds.map((roleId) =>({
                            roleId
                        })),
                    },
                },
                include : {
                    permissions : {
                        include : {
                            role : true
                        }
                    }
                }
            });
            return action;
        }catch (err){
            console.error('Error in UserDAO.createUser:', err);
            throw new Error('Failed to create user with roles.');
        }
    }
    async deleteAction(id:number){
        id = Math.floor(id);
        await prisma.action.delete({
            where : {id}
        })
    }
    async getAllActions(){
        return prisma.action.findMany();
    }
}

export default ActionsDao;