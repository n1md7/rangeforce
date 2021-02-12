import {Context} from 'koa';
import BaseController from './BaseController';
import UserModel from '../models/UserModel';
import {UserRequestType} from '../types/schemas/Users';

class UserController extends BaseController{

    public static async create(ctx: Context): Promise<void>{
        const user = await UserModel.save(ctx.request.body as UserRequestType);
        ctx.body = {
            id: user._id,
            username: user.username,
            coursesFinished: user.coursesFinished,
            coursesInProgress: user.coursesInProgress
        };
    }

    public static async user(ctx: Context): Promise<void>{
        ctx.body = await UserModel.getById(ctx.params.id)
    }

    public static async users(ctx: Context): Promise<void>{
        ctx.body = await UserModel.getAll();
    }
}

export default UserController;