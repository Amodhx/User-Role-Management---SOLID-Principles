import {RoleModel} from "./role.model";

export interface ActionModel{
    id:number
    name:string
    roles : RoleModel[]
}