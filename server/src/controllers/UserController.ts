import {Context} from 'koa';
import BaseController from './BaseController';
import UserModel from '../models/UserModel';

class UserController extends BaseController {

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