import Router from "@koa/router";
import UserController from "../../../../controllers/UserController";

const userRouter = new Router();

userRouter.get('/user/:id', UserController.user);
userRouter.get('/users', UserController.users);
userRouter.get('/users/top/:top?', UserController.topUsersRanks);

userRouter.post('/user', UserController.create);

export default userRouter;
