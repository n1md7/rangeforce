import Koa from "koa";
import serve from "koa-static";
import bodyParser from "koa-bodyparser";
import cors from "@koa/cors";
import log from "../logger";
import routes from "../routes";
import ErrorHandler from "../middlewares/ErrorHandler";
import {Env} from "../types";
import {ConfigOptions} from "../types/config";
import {Server as httpServer} from "http";
import path from "path";
import fs from "fs";

export default class App {
    app: Koa;
    config: ConfigOptions;
    staticFolderPath: string;

    constructor(config: ConfigOptions) {
        this.app = new Koa();
        this.config = config;
        // Makes publicly accessible React build folder
        this.staticFolderPath = path.join(__dirname, config.server.staticFolderPath);
        // Allow any cross-domain requests when not Production environment
        if (process.env.NODE_ENV !== Env.Prod) {
            this.config.origin = '*';
        }
    }

    init(): App {
        const router = routes(this.config);
        this.app.use(ErrorHandler.handle);
        this.app.use(cors({origin: this.config.origin}));
        this.app.use(bodyParser());
        this.app.use(router.allowedMethods());
        this.app.use(router.routes());
        // Serve files from public static folder
        this.app.use(serve(this.staticFolderPath));
        // Redirect all requests to index.html - for React-router
        this.app.use(ctx => {
            try {
                const index = path.join(this.staticFolderPath, this.config.server.indexFile);
                ctx.body = fs.readFileSync(index, 'utf8');
            } catch (error) {
                ctx.body = `
                    <h2>Not Found 404</h2>
                    <p><b>index.html</b> not found in <b>build</b> folder</p>
                    <p>Make sure you run <code>npm run build</code> command</p>
                `;
                ctx.status = 404;
                log.error(error.message || error?.toString());
            }
        });

        this.app.on('error', errorMessage => {
            log.error(errorMessage);
        });

        return this;
    }

    start(): httpServer {
        const {port, hostname, apiContextPath} = this.config.server;

        return this.app.listen(port, hostname, () => {
            log.debug(`Health-check - http://${hostname}:${port}/health-check`);
            log.debug(`Example API endpoint - http://${hostname}:${port}${apiContextPath}/v1/users`);
            log.debug('Server (re)started!');
        });
    }
}
