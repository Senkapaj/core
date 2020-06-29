/**
 * @memberof Drash.Exceptions
 * @class NameCollisionException
 *
 * @description
 *     This class gives you a way to throw name collision errors. For example,
 *     if you try to add two loggers via Drash.addLogger() with the same name,
 *     then this exception will be thrown because the names are colliding.
 */
export class NameCollisionException extends Error {
    /**
       * @description
       *     Construct an object of this class.
       *
       * @param string message
       *     (optional) The exception message.
       */
    constructor(message) {
        super(message);
        this.message = message;
    }
}
//# sourceMappingURL=file:///Users/marianhahne/Code/Senkapaj/core/deno_dir/gen/https/deno.land/x/drash@v1.0.6/src/exceptions/name_collision_exception.ts.js.map