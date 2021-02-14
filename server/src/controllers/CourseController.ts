import {Context} from 'koa';
import BaseController from './BaseController';
import CourseModel from '../models/CourseModel';

class CourseController extends BaseController {

    public static async getCategories(ctx: Context): Promise<void> {
        ctx.body = await CourseModel.getAll();
    }

}

export default CourseController;