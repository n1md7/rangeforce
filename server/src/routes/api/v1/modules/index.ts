import Router from '@koa/router';
import ModuleController from '../../../../controllers/ModuleController';

const moduleRouter = new Router();

moduleRouter.get('/module/:id', ModuleController.module);
moduleRouter.get('/modules', ModuleController.modules);
moduleRouter.get('/modules/top/:top?', ModuleController.topModules);
moduleRouter.post('/module', ModuleController.create);

export default moduleRouter;
