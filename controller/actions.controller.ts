import { PrismaClient } from '@prisma/client'

const prisma:PrismaClient =new PrismaClient();
class ActionsController{
    saveAction(req:any,resp:any):void{

    }
    deleteAction(req:any,resp:any):void{

    }
    updateAction(req:any,resp:any):void{

    }
    async getAllActions(req: any, res: any):Promise<void> {
        res.status(201).send(await prisma.user.findMany())
    }
}
const actionsController = new ActionsController();
export default actionsController
