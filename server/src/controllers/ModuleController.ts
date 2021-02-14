import {Context} from 'koa';
import BaseController from './BaseController';
import ModuleModel from '../models/ModuleModel';

class ModuleController extends BaseController {

    public static async modules(ctx: Context): Promise<void> {
        ctx.body = await ModuleModel.getAll();
    }

    public static async topModules(ctx: Context): Promise<void> {
        ctx.body = await ModuleModel.getTopModulesOfTheMonth(+ctx.params.top || 10);
    }
}

export default ModuleController;