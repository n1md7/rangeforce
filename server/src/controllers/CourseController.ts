import {Context} from 'koa';
import BaseController from './BaseController';
import CourseModel from '../models/CourseModel';
import {CourseRequestType} from '../types/schemas/Courses';
import {HttpCode} from '../types/errorHandler';
import {MongoError} from 'mongodb';

class CourseController extends BaseController {

    public static async create(ctx: Context): Promise<void> {
        const course = await CourseModel.save(ctx.request.body as CourseRequestType);
        ctx.status = HttpCode.created;
        ctx.body = {
            id: course._id,
            name: course.name,
            modules: course.modules,
            tags: course.category
        };
    }

    public static async course(ctx: Context): Promise<void> {
        ctx.body = await CourseModel.getById(ctx.params.id);
    }

    public static async courses(ctx: Context): Promise<void> {
        ctx.body = await CourseModel.getAll();
    }

    public static async getCategories(ctx: Context): Promise<void> {
        ctx.body = await CourseModel.getCategories();
    }

    public static async addModule(ctx: Context): Promise<void> {
        const update = await CourseModel.addModule(ctx.params.id, ctx.request.body);
        if(!update.ok){
            throw new MongoError("no update performed");
        }

        ctx.status = HttpCode.noContent;
    }
}

export default CourseController;