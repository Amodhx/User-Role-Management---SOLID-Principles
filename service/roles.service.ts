import {RoleModel} from "../model/role.model";
import RoleDao from "../dao/impl/role.dao";

class RolesService{
    rolesDao:RoleDao;

    constructor(roleDao : RoleDao) {
        this.rolesDao = roleDao;
    }

    async saveRole(role:RoleModel){
        return await this.rolesDao.create(role.name,role.users);
    }
    async updateRole(role:RoleModel){
        return await this.rolesDao.update(role.id,role.name,role.users);
    }
    async deleteRole(id:number){
        return await this.rolesDao.delete(id);
    }
    async getAllRoles(){
        return await this.rolesDao.findAll();
    }

}
export default RolesService