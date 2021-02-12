import {Context} from 'koa';
import BaseController from './BaseController';
import ModuleModel from '../models/ModuleModel';
import {ModuleRequestType} from '../types/schemas/Modules';
import {HttpCode} from '../types/errorHandler';

class ModuleController extends BaseController {

    public static async create(ctx: Context): Promise<void> {
        const module = await ModuleModel.save(ctx.request.body as ModuleRequestType);
        ctx.status = HttpCode.created;
        ctx.body = {
            id: module._id,
            name: module.name,
            description: module.description
        };
    }

    public static async module(ctx: Context): Promise<void> {
        ctx.body = await ModuleModel.getById(ctx.params.id);
    }

    public static async modules(ctx: Context): Promise<void> {
        ctx.body = await ModuleModel.getAll();
    }
}

export default ModuleController;