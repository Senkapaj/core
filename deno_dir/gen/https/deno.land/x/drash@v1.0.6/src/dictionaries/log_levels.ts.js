/**
 * @memberof Drash.Dictionaries
 *
 * @description
 *     The log levels which are organized by rank in ascending order.
 *
 * @enum LogLevel
 */
export var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Off"] = 0] = "Off";
    LogLevel[LogLevel["Fatal"] = 1] = "Fatal";
    LogLevel[LogLevel["Error"] = 2] = "Error";
    LogLevel[LogLevel["Warn"] = 3] = "Warn";
    LogLevel[LogLevel["Info"] = 4] = "Info";
    LogLevel[LogLevel["Debug"] = 5] = "Debug";
    LogLevel[LogLevel["Trace"] = 6] = "Trace";
    LogLevel[LogLevel["All"] = 7] = "All";
})(LogLevel || (LogLevel = {}));
/**
 * @memberof Drash.Dictionaries
 *
 * @description
 *     A dictionary of log levels used in the logger classes to properly
 *     display, rank, and prioritize log messages.
 */
export const LogLevels = new Map([
    ["off", { name: "Off", rank: LogLevel.Off }],
    ["fatal", { name: "Fatal", rank: LogLevel.Fatal }],
    ["error", { name: "Error", rank: LogLevel.Error }],
    ["warn", { name: "Warn", rank: LogLevel.Warn }],
    ["info", { name: "Info", rank: LogLevel.Info }],
    ["debug", { name: "Debug", rank: LogLevel.Debug }],
    ["trace", { name: "Trace", rank: LogLevel.Trace }],
    ["all", { name: "All", rank: LogLevel.All }],
]);
//# sourceMappingURL=file:///Users/marianhahne/Code/Senkapaj/core/deno_dir/gen/https/deno.land/x/drash@v1.0.6/src/dictionaries/log_levels.ts.js.map