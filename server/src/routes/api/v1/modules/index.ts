import Router from '@koa/router';
import ModuleController from '../../../../controllers/ModuleController';

const moduleRouter = new Router();

moduleRouter.get('/modules', ModuleController.modules);
moduleRouter.get('/modules/top/:top?', ModuleController.topModules);

export default moduleRouter;
