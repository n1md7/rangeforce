import Router from '@koa/router';
import CourseController from '../../../../controllers/CourseController';

const courseRouter = new Router();

courseRouter.get('/categories', CourseController.getCategories);

export default courseRouter;
