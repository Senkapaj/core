// Copyright 2018-2020 the oak authors. All rights reserved. MIT license.
function isRouterContext(value) {
    return "params" in value;
}
export function getQuery(ctx, { mergeParams, asMap } = {}) {
    const result = {};
    if (mergeParams && isRouterContext(ctx)) {
        Object.assign(result, ctx.params);
    }
    for (const [key, value] of ctx.request.url.searchParams) {
        result[key] = value;
    }
    return asMap ? new Map(Object.entries(result)) : result;
}
//# sourceMappingURL=file:///home/marian/Code/Senkapaj/core/deno_dir/gen/https/deno.land/x/oak@v5.1.0/helpers.ts.js.map