import {UserModel} from "../../model/user.model";
import prisma from "../../prisma/client";
import {BaseDao} from "../base.dao";
import {name} from "express";

class RoleDao implements BaseDao<UserModel>{

    async create(name: string, list: UserModel[]) {
        try {
            const userIds = list.map((user) => user.id).filter((id): id is number => id !== undefined);
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

    async delete(id: number) {
        id = Math.floor(id)
        await prisma.role.delete({
            where: {id},
        });
    }

    async findAll() {
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

    async update(id: number, name: string, list: UserModel[]) {
        id = Math.floor(id);
        try {
            const userIds = list
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

}
export default RoleDao