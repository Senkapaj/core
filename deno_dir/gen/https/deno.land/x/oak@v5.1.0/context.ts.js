// Copyright 2018-2020 the oak authors. All rights reserved. MIT license.
import { Cookies } from "./cookies.ts";
import { acceptable, acceptWebSocket, } from "./deps.ts";
import { createHttpError } from "./httpError.ts";
import { Request } from "./request.ts";
import { Response } from "./response.ts";
import { send } from "./send.ts";
/** Provides context about the current request and response to middleware
 * functions. */
export class Context {
    constructor(app, serverRequest) {
        this.app = app;
        this.state = app.state;
        this.request = new Request(serverRequest);
        this.respond = true;
        this.response = new Response(this.request);
        this.cookies = new Cookies(this.request, this.response, {
            keys: this.app.keys,
            secure: this.request.secure,
        });
    }
    #socket;
    /** Is `true` if the current connection is upgradeable to a web socket.
     * Otherwise the value is `false`.  Use `.upgrade()` to upgrade the connection
     * and return the web socket. */
    get isUpgradable() {
        return acceptable(this.request);
    }
    /** If the the current context has been upgraded, then this will be set to
     * with the web socket, otherwise it is `undefined`. */
    get socket() {
        return this.#socket;
    }
    /** Asserts the condition and if the condition fails, creates an HTTP error
     * with the provided status (which defaults to `500`).  The error status by
     * default will be set on the `.response.status`.
     */
    assert(condition, errorStatus = 500, message, props) {
        if (condition) {
            return;
        }
        const err = createHttpError(errorStatus, message);
        if (props) {
            Object.assign(err, props);
        }
        throw err;
    }
    /** Asynchronously fulfill a response with a file from the local file
     * system.
     *
     * If the `options.path` is not supplied, the file to be sent will default
     * to this `.request.url.pathname`.
     *
     * Requires Deno read permission. */
    send(options) {
        const { path = this.request.url.pathname, ...sendOptions } = options;
        return send(this, path, sendOptions);
    }
    /** Create and throw an HTTP Error, which can be used to pass status
     * information which can be caught by other middleware to send more
     * meaningful error messages back to the client.  The passed error status will
     * be set on the `.response.status` by default as well.
     */
    throw(errorStatus, message, props) {
        const err = createHttpError(errorStatus, message);
        if (props) {
            Object.assign(err, props);
        }
        throw err;
    }
    /** Take the current request and upgrade it to a web socket, resolving with
     * the web socket object. This will set `.respond` to `false`. */
    async upgrade() {
        if (this.#socket) {
            return this.#socket;
        }
        const { conn, r: bufReader, w: bufWriter, headers } = this.request.serverRequest;
        this.#socket = await acceptWebSocket({ conn, bufReader, bufWriter, headers });
        this.respond = false;
        return this.#socket;
    }
}
//# sourceMappingURL=file:///Users/marianhahne/Code/Senkapaj/core/deno_dir/gen/https/deno.land/x/oak@v5.1.0/context.ts.js.map