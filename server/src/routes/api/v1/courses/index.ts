import Router from '@koa/router';
import CourseController from '../../../../controllers/CourseController';

const courseRouter = new Router();

courseRouter.get('/course/:id', CourseController.course);
courseRouter.get('/courses', CourseController.courses);
courseRouter.get('/categories', CourseController.getCategories);
courseRouter.put('/course/:id/add-module', CourseController.addModule);
courseRouter.post('/course', CourseController.create);

export default courseRouter;
