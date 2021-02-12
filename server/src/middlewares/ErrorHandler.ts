import {Context, Next} from "koa";
import {ErrorType, HttpText, HttpCode} from "../types/errorHandler";

export default class ErrorHandler {
    static async handle(ctx: Context, next: Next): Promise<void> {
        await next().catch(error => {
            ErrorHandler.sendErrorResponse(error, ctx);
        });
    }

    private static buildErrorMessage(error: Error, ctx: Context) {
        const status: number = ctx.status || HttpCode.internalServerError;
        const errorMessage: string = error.message || HttpText.internalServerError;

        return `[${error.name}]:[${status} - ${errorMessage}]`;
    }

    private static sendErrorResponse(error: Error, ctx: Context) {

        switch (error.name) {
            case ErrorType.mongoError:
            case ErrorType.validationError:
                ctx.status = HttpCode.badRequest;
                ctx.body = error.message;
                break;
            case ErrorType.typeError:
            case ErrorType.castError:
                ctx.status = HttpCode.badRequest;
                ctx.body = HttpText.noContent;
                break;
            default:
                ctx.status = HttpCode.internalServerError;
                ctx.body = HttpText.internalServerError;
        }

        ctx.app.emit('error', ErrorHandler.buildErrorMessage(error, ctx));
    }
}
