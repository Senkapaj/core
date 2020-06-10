import {Client, QueryResult} from "../../deps.ts";
import {Database, DatabaseResult} from "./Database.ts";

export class PostgresDatabase implements Database{
    private connection : Client;

    constructor() {
        this.connection = new Client({
            user: "senkapaj_root",
            password: "password",
            database: "senkapaj_core",
            hostname: "localhost",
            port: 5432
        });
    }

    async query(query: string): Promise<DatabaseResult> {
        await this.connection.connect();

        const result = await this.connection.query(query);

        await this.connection.end();

        return {rowCount: result.rowCount ?? 0, rows: result.rows}
    }

}
