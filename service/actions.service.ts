import {ActionModel} from "../model/action.model";
import ActionsDao from "../dao/actions.dao";

class ActionsService{
    actionsDAO : ActionsDao;
    constructor(actionsDAO : ActionsDao) {
        this.actionsDAO = actionsDAO;
    }
    async saveAction(action:ActionModel){
        return await this.actionsDAO.createAction(action.name,action.roles);
    }
    async updateAction(action:ActionModel){
        return await this.actionsDAO.updateAction(action.id,action.name,action.roles);
    }
    async deleteAction(id:number){
        return await this.actionsDAO.deleteAction(id);
    }
    async getAllActions(){
        return this.actionsDAO.getAllActions();
    }
}
export default ActionsService