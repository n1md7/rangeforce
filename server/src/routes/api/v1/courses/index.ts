import Router from '@koa/router';
import CourseController from '../../../../controllers/CourseController';

const courseRouter = new Router();

courseRouter.get('/course/:id', CourseController.course);
courseRouter.get('/courses', CourseController.courses);
courseRouter.post('/course', CourseController.course);

export default courseRouter;
