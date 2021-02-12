import Router from '@koa/router';
import userRouter from './users';
import moduleRouter from './modules';
import courseRouter from './courses';

const apiRoute = new Router();
const combineApiRoutes = [
    userRouter.routes(),
    courseRouter.routes(),
    moduleRouter.routes()
];
apiRoute.use('/v1', ...combineApiRoutes);

export default apiRoute;
