/**
 * @memberof Drash.Http
 * @class Resource
 *
 * @description
 *     This is the base resource class for all resources. All resource classes
 *     must be derived from this class.
 */
export class Resource {
    //////////////////////////////////////////////////////////////////////////////
    // FILE MARKER - CONSTRUCTOR /////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    /**
     * @description
     *     Construct an object of this class.
     *
     * @param ServerRequest request
     *     The request object.
     * @param Drash.Http.Response response
     *     The response object.
     * @param Drash.Http.Server server
     *     The server object.
     */
    constructor(request, response, server) {
        /**
         * @description
         *     A property to hold the middleware this resource uses.
         *
         *     All derived middleware classes MUST define this property as static
         *     (e.g., static middleware = ["MiddlewareClass"];)
         *
         * @property string[] middleware
         */
        this.middleware = {};
        /**
         * @description
         *     A property to hold the name of this resource. This property is used by
         *     Drash.Http.Server to help it store resources in its resources property
         *     by name.
         *
         * @property string name
         */
        this.name = "";
        /**
         * @description
         *     A property to hold the paths to access this resource.
         *
         *     All derived resource classes MUST define this property as static
         *     (e.g., static paths = ["path"];)
         *
         * @property any[] paths
         */
        this.paths = [];
        this.request = request;
        this.response = response;
        this.server = server;
    }
}
//# sourceMappingURL=file:///Users/marianhahne/Code/Senkapaj/core/deno_dir/gen/https/deno.land/x/drash@v1.0.6/src/http/resource.ts.js.map