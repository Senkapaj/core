import { Logger } from "./logger.ts";
/**
 * @memberof Drash.CoreLoggers
 * @class ConsoleLogger
 *
 * @description
 *     This logger allows you to log messages to the console.
 */
export class ConsoleLogger extends Logger {
    /**
     * @description
     *     Construct an object of this class.
     *
     * @param any configs
     *     See Drash.Interfaces.LoggerConfigs.
     */
    constructor(configs) {
        super(configs);
    }
    /**
     * @description
     *     Write a log message to the console.
     *
     *     This method is not intended to be called directly. It is already used
     *     in the base class (Logger) and automatically called.
     *
     * @param any logMethodLevelDefinition
     * @param string message
     *
     * @return string
     *     Returns the log message which is used for unit testing purposes.
     */
    write(logMethodLevelDefinition, message) {
        if (this.test) {
            return message;
        }
        console.log(message);
    }
}
//# sourceMappingURL=file:///Users/marianhahne/Code/Senkapaj/core/deno_dir/gen/https/deno.land/x/drash@v1.0.6/src/core_loggers/console_logger.ts.js.map