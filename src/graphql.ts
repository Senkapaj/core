
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface App {
    id: number;
    name: string;
    host: string;
    port?: number;
    description?: string;
}

export interface IQuery {
    app(id: number): App | Promise<App>;
    appByName(name: string): App | Promise<App>;
}

export interface IMutation {
    createApp(name: string, host: string, port?: number, description?: string): App | Promise<App>;
}
