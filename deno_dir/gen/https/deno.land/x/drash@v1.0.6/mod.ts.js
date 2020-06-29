// Compilers
import { TemplateEngine as BaseTemplateEngine } from "./src/compilers/template_engine.ts";
// Decorators
import { Middleware as MiddlewareHandler, } from "./src/http/middleware.ts";
// Dictionaries
import * as log_levels from "./src/dictionaries/log_levels.ts";
import { mime_db } from "./src/dictionaries/mime_db.ts";
// Exceptions
import { HttpException as BaseHttpException } from "./src/exceptions/http_exception.ts";
import { HttpMiddlewareException as BaseHttpMiddlewareException } from "./src/exceptions/http_middleware_exception.ts";
import { HttpResponseException as BaseHttpResponseException } from "./src/exceptions/http_response_exception.ts";
import { NameCollisionException as BaseNameCollisionException } from "./src/exceptions/name_collision_exception.ts";
import { Resource as BaseResource } from "./src/http/resource.ts";
import { Response as BaseResponse } from "./src/http/response.ts";
import { Server as BaseServer } from "./src/http/server.ts";
// Loggers
import { Logger as BaseLogger } from "./src/core_loggers/logger.ts";
import { ConsoleLogger as BaseConsoleLogger } from "./src/core_loggers/console_logger.ts";
import { FileLogger as BaseFileLogger } from "./src/core_loggers/file_logger.ts";
// Services
import { HttpService as BaseHttpService } from "./src/services/http_service.ts";
import { HttpRequestService as BaseHttpRequestService } from "./src/services/http_request_service.ts";
import { StringService as BaseStringService } from "./src/services/string_service.ts";
export var Drash;
(function (Drash) {
    /**
     * @description
     *     Drash version. Also represents what Deno version is supported.
     *
     * @property string version
     */
    Drash.version = "v1.0.6";
    let Compilers;
    (function (Compilers) {
        class TemplateEngine extends BaseTemplateEngine {
        }
        Compilers.TemplateEngine = TemplateEngine;
    })(Compilers = Drash.Compilers || (Drash.Compilers = {}));
    let Dictionaries;
    (function (Dictionaries) {
        Dictionaries.LogLevels = log_levels.LogLevels;
        Dictionaries.MimeDb = mime_db;
    })(Dictionaries = Drash.Dictionaries || (Drash.Dictionaries = {}));
    let Exceptions;
    (function (Exceptions) {
        class HttpException extends BaseHttpException {
        }
        Exceptions.HttpException = HttpException;
        class HttpMiddlewareException extends BaseHttpMiddlewareException {
        }
        Exceptions.HttpMiddlewareException = HttpMiddlewareException;
        class HttpResponseException extends BaseHttpResponseException {
        }
        Exceptions.HttpResponseException = HttpResponseException;
        class NameCollisionException extends BaseNameCollisionException {
        }
        Exceptions.NameCollisionException = NameCollisionException;
    })(Exceptions = Drash.Exceptions || (Drash.Exceptions = {}));
    let CoreLoggers;
    (function (CoreLoggers) {
        class ConsoleLogger extends BaseConsoleLogger {
        }
        CoreLoggers.ConsoleLogger = ConsoleLogger;
        class FileLogger extends BaseFileLogger {
        }
        CoreLoggers.FileLogger = FileLogger;
        class Logger extends BaseLogger {
        }
        CoreLoggers.Logger = Logger;
    })(CoreLoggers = Drash.CoreLoggers || (Drash.CoreLoggers = {}));
    let Http;
    (function (Http) {
        Http.Middleware = MiddlewareHandler;
        class Resource extends BaseResource {
        }
        Http.Resource = Resource;
        class Response extends BaseResponse {
        }
        Http.Response = Response;
        class Server extends BaseServer {
        }
        Http.Server = Server;
    })(Http = Drash.Http || (Drash.Http = {}));
    let Services;
    (function (Services) {
        class HttpService extends BaseHttpService {
        }
        Services.HttpService = HttpService;
        class HttpRequestService extends BaseHttpRequestService {
        }
        Services.HttpRequestService = HttpRequestService;
        class StringService extends BaseStringService {
        }
        Services.StringService = StringService;
    })(Services = Drash.Services || (Drash.Services = {}));
    /**
       * A property to hold all loggers added via Drash.addLogger(). This property
       * allows users to access loggers via Drash.Loggers.SomeLogger and acts like
       * a namespace for loggers.
       *
       * @property Drash.Loggers Loggers
       */
    Drash.Loggers = {};
    /**
       * A property to hold all members added via Drash.addMember(). This property
       * allows users to access members via Drash.Members.SomeMember and acts like
       * a namespace for members that are external to Drash.
       *
       * @property Drash.Members Members
       */
    Drash.Members = {};
    /**
       * Add a member to the Members namespace. After adding a member, you can use
       * the member via Drash.Members.YourMember.doSomething().
       *
       * @param string name
       *     The member's name which can be accessed via Drash.Members[name].
       * @param any member
       *     The member.
       */
    function addMember(name, member) {
        if (Drash.Members[name]) {
            throw new Exceptions.NameCollisionException(`Members must be unique: "${name}" was already added.`);
        }
        Drash.Members[name] = member;
    }
    Drash.addMember = addMember;
    /**
       * Add a logger to the Loggers namespace. After adding a logger, you can use
       * the logger via Drash.Loggers.YourLogger.doSomething().
       *
       * @param string name
       *     The logger's name which can be accessed via Drash.Members[name].
       * @param any logger
       *     The logger.
       */
    function addLogger(name, logger) {
        if (Drash.Loggers[name]) {
            throw new Exceptions.NameCollisionException(`Loggers must be unique: "${name}" was already added.`);
        }
        Drash.Loggers[name] = logger;
    }
    Drash.addLogger = addLogger;
})(Drash || (Drash = {}));
//# sourceMappingURL=file:///Users/marianhahne/Code/Senkapaj/core/deno_dir/gen/https/deno.land/x/drash@v1.0.6/mod.ts.js.map