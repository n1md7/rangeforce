import Router from "@koa/router";
import UserController from "../../../../controllers/UserController";

const userRouter = new Router();

userRouter.get('/users', UserController.users);
userRouter.get('/users/top/:top?', UserController.topUsersRanks);

export default userRouter;
