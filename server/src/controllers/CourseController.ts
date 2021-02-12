import {Context} from 'koa';
import BaseController from './BaseController';
import CourseModel from '../models/CourseModel';
import {CourseRequestType} from '../types/schemas/Courses';
import {HttpCode} from '../types/errorHandler';

class CourseController extends BaseController {

    public static async create(ctx: Context): Promise<void> {
        const course = await CourseModel.save(ctx.request.body as CourseRequestType);
        ctx.status = HttpCode.created;
        ctx.body = {
            id: course._id,
            name: course.name,
            modules: course.modules,
            tags: course.tags
        };
    }

    public static async course(ctx: Context): Promise<void> {
        ctx.body = await CourseModel.getById(ctx.params.id);
    }

    public static async courses(ctx: Context): Promise<void> {
        ctx.body = await CourseModel.getAll();
    }
}

export default CourseController;