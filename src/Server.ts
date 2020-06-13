import {Application, Middleware, Router} from "./deps.ts";

export class Server {
    private readonly host: String;

    private readonly port: number;

    private application: Application;

    private router: Router;

    constructor(host: String, port: number) {
        this.host = host;
        this.port = port;

        this.application = new Application();

        this.router = new Router();
        this.addMiddleware(this.router.routes())
    }

    async addMiddleware(middleware: Middleware) {
        this.application.use(middleware);
    }

    getRouter(): Router {
        return this.router;
    }

    run() {
        this.application.listen(`${this.host}:${this.port}`);
    }
}
