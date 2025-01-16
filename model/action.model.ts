import {PermissionModel} from "./permission.model";

export interface ActionModel{
    id:number
    name:string
    permissions : PermissionModel[]
}