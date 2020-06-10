import {Client, QueryResult} from "../../deps.ts";
import {Database, DatabaseResult} from "./Database.ts";

export class PostgresDatabase implements Database{
    private connection : Client;

    constructor() {
        this.connection = new Client({
            user: Deno.env.get("DB_USERNAME"),
            password: Deno.env.get("DB_PASSWORD"),
            database: Deno.env.get("DB_NAME"),
            hostname: Deno.env.get("DB_HOST"),
            port: parseInt(Deno.env.get("DB_PORT")!)
        });
    }

    async query(query: string): Promise<DatabaseResult> {
        await this.connection.connect();

        const result = await this.connection.query(query);

        await this.connection.end();

        return {rowCount: result.rowCount ?? 0, rows: result.rows}
    }

}
