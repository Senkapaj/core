/**
 * Executes the middleware
 *
 * @param middlewares Contains middlewares to be executed
 */
export function Middleware(middlewares) {
    return function (...args) {
        switch (args.length) {
            case 1:
                // Class decorator
                // @ts-ignore
                return ClassMiddleware(middlewares).apply(this, args);
            case 2:
                // Property decorator
                break;
            case 3:
                if (typeof args[2] == "number") {
                    // Parameter decorator
                    break;
                }
                // @ts-ignore
                return MethodMiddleware(middlewares).apply(this, args);
            default:
                throw new Error("Not a valid decorator");
        }
    };
}
/**
 * Executes the middleware function before or after the request at method level
 *
 * @param middlewares Contains all middleware to be run
 */
function MethodMiddleware(middlewares) {
    return function (target, propertyKey, descriptor) {
        const originalFunction = descriptor.value;
        descriptor.value = async function (...args) {
            const { request, response } = Object.getOwnPropertyDescriptors(this);
            // Execute before_request Middleware if exist
            if (middlewares.before_request != null) {
                for (const middleware of middlewares.before_request) {
                    await middleware(request.value, response.value);
                }
            }
            // Execute function
            const result = originalFunction.apply(this, args);
            // Execute after_request Middleware if exist
            if (middlewares.after_request != null) {
                for (const middleware of middlewares.after_request) {
                    await middleware(request.value, result);
                }
            }
            return result;
        };
        return descriptor;
    };
}
/**
 * Executes the middleware function before or after the request at class level
 *
 * @param middlewares Contains all middleware to be run
 */
function ClassMiddleware(middlewares) {
    return function (constr) {
        const classFunctions = Object.getOwnPropertyDescriptors(constr.prototype);
        for (const key in classFunctions) {
            if (key == "constructor") {
                continue;
            }
            const originalFunction = classFunctions[key].value;
            classFunctions[key].value = async function (...args) {
                const { request, response } = Object.getOwnPropertyDescriptors(this);
                // Execute before_request Middleware if exist
                if (middlewares.before_request != null) {
                    for (const middleware of middlewares.before_request) {
                        await middleware(request.value, response.value);
                    }
                }
                // Execute function
                const result = originalFunction.apply(this, args);
                // Execute after_request Middleware if exist
                if (middlewares.after_request != null) {
                    for (const middleware of middlewares.after_request) {
                        await middleware(request.value, result);
                    }
                }
                return result;
            };
            Object.defineProperty(constr.prototype, key, classFunctions[key]);
        }
        return constr;
    };
}
//# sourceMappingURL=file:///Users/marianhahne/Code/Senkapaj/core/deno_dir/gen/https/deno.land/x/drash@v1.0.6/src/http/middleware.ts.js.map