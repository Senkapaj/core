// Copyright 2020 the oak authors. All rights reserved. MIT license.
/** A middleware that will set the response time for other middleware in
 * milliseconds as `X-Response-Time` which can be used for diagnostics and other
 * instrumentation of an application.  Utilise the middleware before the "real"
 * processing occurs.
 *
 * ```ts
 * import { responseTimeHeader } from "https://deno.land/x/oak-middleware/mod.ts";
 * import { Application } from "https://deno.land/x/oak/mod.ts"
 *
 * const app = new App();
 * app.use(responseTimeHeader);
 *
 * // other middleware
 *
 * await app.listen(":80");
 * ```
 */
export const responseTypeHeader = async function (ctx, next) {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.response.headers.set("X-Response-Time", `${ms}ms`);
};
//# sourceMappingURL=file:///home/marian/Code/Senkapaj/core/deno_dir/gen/https/deno.land/x/oak_middleware@v0.1.0/observability/response_time_header.ts.js.map