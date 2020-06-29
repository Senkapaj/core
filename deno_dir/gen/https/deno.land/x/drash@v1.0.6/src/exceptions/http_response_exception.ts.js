/**
 * @memberof Drash.Exceptions
 * @class HttpResponseException
 *
 * @description
 *     This class gives you a way to throw HTTP errors semantically in the
 *     response class. The difference between this class and HttpException
 *     comes when you want to check which exception was thrown via
 *     exception.constructor.name.
 */
export class HttpResponseException extends Error {
    // FILE MARKER: CONSTRUCTOR //////////////////////////////////////////////////
    /**
     * @description
     *     Construct an object of this class.
     *
     * @param number code
     *     The HTTP response code associated with this exception.
     * @param string message
     *     (optional) The exception message.
     */
    constructor(code, message) {
        super(message);
        this.code = code;
    }
}
//# sourceMappingURL=file:///Users/marianhahne/Code/Senkapaj/core/deno_dir/gen/https/deno.land/x/drash@v1.0.6/src/exceptions/http_response_exception.ts.js.map