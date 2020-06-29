import { Logger } from "./logger.ts";
/**
 * @memberof Drash.CoreLoggers
 * @class FileLogger
 *
 * @description
 *     This logger allows you to log messages to a file.
 */
export class FileLogger extends Logger {
    /**
     * @description
     *     Construct an object of this class.
     *
     * @param Drash.Interfaces.LoggerConfigs configs
     *     See Drash.Interfaces.LoggerConfigs.
     *
     */
    constructor(configs) {
        super(configs);
        /**
         * @description
         *     The file this logger will write log messages to.
         *
         * @property string file
         */
        this.file = "tmp_log.log";
        if (configs.file) {
            this.file = configs.file;
        }
    }
    /**
     * @description
     *     Write a log message to this.file.
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
        const encoder = new TextEncoder();
        let encoded = encoder.encode(message + "\n");
        Deno.writeFileSync(this.file, encoded, { append: true });
        return message;
    }
}
//# sourceMappingURL=file:///Users/marianhahne/Code/Senkapaj/core/deno_dir/gen/https/deno.land/x/drash@v1.0.6/src/core_loggers/file_logger.ts.js.map