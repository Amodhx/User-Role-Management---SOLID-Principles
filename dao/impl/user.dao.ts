import {RoleModel} from "../../model/role.model";
import prisma from "../../prisma/client";
import {BaseDao} from "../base.dao";

class UserDao implements BaseDao<RoleModel>{

    async create(name: string, list: RoleModel[]) {
        try {
            const roleIds = list.map((role) => role.id);
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

    async delete(id: number) {
        id = Math.floor(id);
        await prisma.user.delete({
            where: { id },
        });
    }

    async findAll() {
        return prisma.user.findMany();
    }

    async update(id: number, name: string, list: RoleModel[]) {
        try {
            const roleIds = list.map((role) => role.id);
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
}
export default UserDao;