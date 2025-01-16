import actionService from "../service/actions.service";
import actionsService from "../service/actions.service";

class ActionsController{
    async saveAction(req: any, resp: any) {
        try {
            const action = await actionsService.saveAction(req.body);
            resp.status(201).send(action)
        }catch (err){
            resp.status(500).send(err)
        }
    }
    async deleteAction(req: any, resp: any) {
        try {
            await actionsService.deleteAction(req.query['id'])
            resp.status(201).send("Action Deleted!")
        }catch (err){
            resp.status(500).send(err);
        }
    }
    async updateAction(req: any, resp: any) {
        try {
            const user = await actionsService.updateAction(req.body);
            resp.status(201).send(user);
        }catch (err){
            resp.status.send(err);
        }
    }
    async getAllActions(req: any, res: any){
        res.status(201).send(await actionService.getAllActions())
    }
}
const actionsController = new ActionsController();
export default actionsController
