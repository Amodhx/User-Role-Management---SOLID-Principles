import {RoleModel} from "../model/role.model";
import roleDao from "../dao/role.dao";

class RolesService{

    async saveRole(role:RoleModel){
        return await roleDao.createRole(role.name,role.users);
    }
    async updateRole(role:RoleModel){
        return await roleDao.updateRole(role.id,role.name,role.users);
    }
    async deleteRole(id:number){
        return await roleDao.deleteRole(id);
    }
    async getAllRoles(){
        return await roleDao.getAllRoles();
    }

}
const rolesService = new RolesService();
export default rolesService