import {HTTPMethods, Response, Request, Middleware, Context} from "../deps.ts";

// NOTE: currently not in use
export interface RouteFunction {
    (request : Request, response: Response): Response;
}

// NOTE: currently not in use
export type Route = {
    method: HTTPMethods,
    path: String,
    routeFunction: RouteFunction
}

// NOTE: currently not in use
export class Router {
    public routes: Array<Route> = [];

    addRoute(route: Route) {
        this.routes.push(route);
    }

    getRouteForPath(path: String): Route {
        return this.getRouteForPathAndMethod(path, "GET");
    }

    getRouteForPathAndMethod(path: String, method: HTTPMethods): Route {
        console.log(`${path} - ${method}`)
        return this.routes.filter((route) => {
            return route.path == path && route.method == method
        })[0];
    }

    async middleware(ctx: Context, next: CallableFunction): Promise<void> {
        console.log(`${ctx.request.method} ${ctx.request.serverRequest.url}`)

        const route = this.getRouteForPathAndMethod(ctx.request.serverRequest.url, ctx.request.method)
        ctx.response = route.routeFunction(ctx.request, ctx.response);
        next();
    }
}
