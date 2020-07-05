
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class App {
    id: number;
    name: string;
    host: string;
    port?: number;
    description?: string;
}

export abstract class IQuery {
    abstract app(id: number): App | Promise<App>;

    abstract appByName(name: string): App | Promise<App>;
}

export abstract class IMutation {
    abstract createApp(name: string, host: string, port?: number, description?: string): App | Promise<App>;
}
