// Copyright 2018-2020 the Deno authors. All rights reserved. MIT license.
export class DenoStdInternalError extends Error {
    constructor(message) {
        super(message);
        this.name = "DenoStdInternalError";
    }
}
/** Make an assertion, if not `true`, then throw. */
export function assert(expr, msg = "") {
    if (!expr) {
        throw new DenoStdInternalError(msg);
    }
}
//# sourceMappingURL=file:///Users/marianhahne/Code/Senkapaj/core/deno_dir/gen/https/deno.land/std@v0.57.0/_util/assert.ts.js.map