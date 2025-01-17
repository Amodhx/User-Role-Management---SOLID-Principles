import {RoleModel} from "../../model/role.model";
import prisma from "../../prisma/client";
import {BaseDao} from "../base.dao";
import {name} from "express";

class ActionsDao implements BaseDao<RoleModel>{

    async create(name: string, list: RoleModel[]) {
        try {
            let roleIds = list.map((role:RoleModel) => role.id);
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

    async delete(id: number) {
        id = Math.floor(id);
        await prisma.action.delete({
            where : {id}
        })
    }

    async findAll() {
        return prisma.action.findMany();
    }

    async update(id: number, name: string, list: RoleModel[]) {
        id = Math.floor(id);
        try {
            let roleIds = list.map((role:RoleModel) => role.id);
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
}

export default ActionsDao;