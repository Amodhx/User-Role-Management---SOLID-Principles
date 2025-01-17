
import ActionsService from "../service/actions.service";

class ActionsController{
    actionsService:ActionsService;
    constructor(actionsService:ActionsService) {
        this.actionsService =actionsService;
    }
    async saveAction(req: any, resp: any) {
        try {
            const action = await this.actionsService.saveAction(req.body);
            resp.status(201).send(action)
        }catch (err){
            resp.status(500).send(err)
        }
    }
    async deleteAction(req: any, resp: any) {
        try {
            await this.actionsService.deleteAction(req.query['id'])
            resp.status(201).send("Action Deleted!")
        }catch (err){
            resp.status(500).send(err);
        }
    }
    async updateAction(req: any, resp: any) {
        try {
            const user = await this.actionsService.updateAction(req.body);
            resp.status(201).send(user);
        }catch (err){
            resp.status.send(err);
        }
    }
    async getAllActions(req: any, res: any){
        res.status(201).send(await this.actionsService.getAllActions())
    }
}
export default ActionsController
