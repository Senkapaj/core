import {Middleware} from "../deps.ts";

export const requestLogger: Middleware = async function (ctx, next) {
    await next();
    const requestTime = ctx.response.headers.get("X-Response-Time");
    
    console.log(`${ctx.request.method} ${ctx.request.serverRequest.url} - ${requestTime}`);
}
