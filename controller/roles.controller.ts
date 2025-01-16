import rolesService from "../service/roles.service";

class RolesController{

    async saveRole(req: any, resp: any) {
        try {
            const user = await rolesService.saveRole(req.body)
            resp.status(201).send(user)
        }catch (e){
            resp.status(500).send("INTERNAL SERVER ERROR")
        }
    }
    async updateRole(req: any, resp: any) {
        try {
            const user = await rolesService.updateRole(req.body);
            resp.status(201).send(user);
        }catch (err){
            resp.status(500).send(err)
        }
    }
    async deleteRole(req: any, resp: any) {
        try {
            await rolesService.deleteRole(req.query['id']);
            resp.status(201).send("Role Deleted")
        }catch (err){
            console.log(err)
            resp.status(500).send(err);
        }
    }
    async getAllRoles(req: any, resp: any) {
        try {
            resp.status(201).send(await rolesService.getAllRoles());
        } catch (err) {
            resp.status(500).send(err);
        }
    }
}
const rolesController = new RolesController();
export default rolesController