import {Application, Client, config} from "./deps.ts";
import {PostgresDatabase} from "./lib/db/PostgresDatabase.ts";
import {responseTimeHeader} from "./middleware/ResponseTimeHeader.ts";
import {Server} from "./Server.ts";

config({path: "./.env", export: true});

console.log("Starting Senkapaj Core...")

const host = Deno.env.get("HOST") || "127.0.0.1";
const port = parseInt(Deno.env.get("PORT") ?? "8080");

const server = new Server(host, port);
const db = new PostgresDatabase();

server.addMiddleware(responseTimeHeader);

// app.use(async (ctx) => {
//     const query = "SELECT * FROM test;"
//
//     try {
//         console.log(`Run query ${query}`)
//
//         const result = await db.query(query);
//         console.log(result);
//     } catch (e) {
//         console.log(e);
//     }
//
//     ctx.response.body = "Hello world!";
// });

console.log(`Listing on ${host}:${port}`)
await server.run();
