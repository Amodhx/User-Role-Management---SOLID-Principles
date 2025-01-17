import {ActionModel} from "../model/action.model";
import ActionsDao from "../dao/impl/actions.dao";

class ActionsService{
    actionsDAO : ActionsDao;
    constructor(actionsDAO : ActionsDao) {
        this.actionsDAO = actionsDAO;
    }
    async saveAction(action:ActionModel){
        return await this.actionsDAO.create(action.name,action.roles);
    }
    async updateAction(action:ActionModel){
        return await this.actionsDAO.update(action.id,action.name,action.roles);
    }
    async deleteAction(id:number){
        return await this.actionsDAO.delete(id);
    }
    async getAllActions(){
        return this.actionsDAO.findAll();
    }
}
export default ActionsService