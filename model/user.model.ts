import {RoleModel} from "./role.model";

export interface UserModel{
    id?: number;
    name: string;
    roles : RoleModel[]
}