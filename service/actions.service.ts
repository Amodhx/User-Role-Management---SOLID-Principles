import {ActionModel} from "../model/action.model";
import actionsDAO from "../dao/actions.dao";

class ActionsService{

    async saveAction(action:ActionModel){
        return await actionsDAO.createAction(action.name,action.roles);
    }
    async updateAction(action:ActionModel){
        return await actionsDAO.updateAction(action.id,action.name,action.roles);
    }
    async deleteAction(id:number){
        return await actionsDAO.deleteAction(id);
    }
    async getAllActions(){
        return actionsDAO.getAllActions();
    }
}
const actionService = new ActionsService();
export default actionService