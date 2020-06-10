import {Application, Middleware} from "./deps.ts";

export class Server {
    private readonly host: String;

    private readonly port: number;

    private application: Application;

    constructor(host: String, port: number) {
        this.host = host;
        this.port = port;

        this.application = new Application();
    }

    async addMiddleware(middleware: Middleware) {
        this.application.use(middleware);
    }

    run() {
        this.application.listen(`${this.host}:${this.port}`);
    }
}
