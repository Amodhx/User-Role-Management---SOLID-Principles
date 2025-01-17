import {RoleModel} from "../model/role.model";
import RoleDao from "../dao/role.dao";

class RolesService{
    rolesDao:RoleDao;

    constructor(roleDao : RoleDao) {
        this.rolesDao = roleDao;
    }

    async saveRole(role:RoleModel){
        return await this.rolesDao.createRole(role.name,role.users);
    }
    async updateRole(role:RoleModel){
        return await this.rolesDao.updateRole(role.id,role.name,role.users);
    }
    async deleteRole(id:number){
        return await this.rolesDao.deleteRole(id);
    }
    async getAllRoles(){
        return await this.rolesDao.getAllRoles();
    }

}
export default RolesService