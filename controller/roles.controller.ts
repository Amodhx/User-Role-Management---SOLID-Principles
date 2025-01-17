import RolesService from "../service/roles.service";

class RolesController{
    roleService:RolesService;
    constructor(roleService : RolesService) {
        this.roleService = roleService;
    }

    async saveRole(req: any, resp: any) {
        try {
            const user = await this.roleService.saveRole(req.body)
            resp.status(201).send(user)
        }catch (e){
            resp.status(500).send("INTERNAL SERVER ERROR")
        }
    }
    async updateRole(req: any, resp: any) {
        try {
            const user = await this.roleService.updateRole(req.body);
            resp.status(201).send(user);
        }catch (err){
            resp.status(500).send(err)
        }
    }
    async deleteRole(req: any, resp: any) {
        try {
            await this.roleService.deleteRole(req.query['id']);
            resp.status(201).send("Role Deleted")
        }catch (err){
            console.log(err)
            resp.status(500).send(err);
        }
    }
    async getAllRoles(req: any, resp: any) {
        try {
            resp.status(201).send(await this.roleService.getAllRoles());
        } catch (err) {
            resp.status(500).send(err);
        }
    }
}
export default RolesController