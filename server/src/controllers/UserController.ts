import {Context} from 'koa';
import BaseController from './BaseController';
import UserModel from '../models/UserModel';
import {UserRequestType} from '../types/schemas/Users';
import {HttpCode} from '../types/errorHandler';

class UserController extends BaseController {

    public static async create(ctx: Context): Promise<void> {
        const user = await UserModel.save(ctx.request.body as UserRequestType);
        ctx.status = HttpCode.created;
        ctx.body = {
            id: user._id,
            username: user.username,
            coursesFinished: user.coursesFinished,
            coursesInProgress: user.coursesInProgress
        };
    }

    public static async user(ctx: Context): Promise<void> {
        ctx.body = await UserModel.getById(ctx.params.id)
    }

    public static async users(ctx: Context): Promise<void> {
        ctx.body = await UserModel.getAll();
    }

    public static async topUsersRanks(ctx: Context): Promise<void> {
        const top = +ctx.params.top || 5;
        const topUsersByWeek = await UserModel.getUserRankingByWeek(top);
        const topUsersByMonth = await UserModel.getUserRankingByMonth(top);
        ctx.body = {
            topUsersByWeek,
            topUsersByMonth
        };
    }
}

export default UserController;