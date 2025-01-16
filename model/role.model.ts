import {UserModel} from "./user.model";
import {ActionModel} from "./action.model";

export interface RoleModel{
    id:number
    name:string
    users : UserModel[]
    actions : ActionModel[]
}