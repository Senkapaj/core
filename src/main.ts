import {Application, Client, config, Request, Response, Router} from "./deps.ts";
import {PostgresDatabase} from "./lib/db/PostgresDatabase.ts";
import {responseTimeHeader} from "./middleware/ResponseTimeHeader.ts";
import {Server} from "./Server.ts";
import {requestLogger} from "./middleware/RequestLogger.ts";

config({path: "./.env", export: true});

console.log("Starting Senkapaj Core...")

const host = Deno.env.get("HOST") || "127.0.0.1";
const port = parseInt(Deno.env.get("PORT") ?? "8080");

const server = new Server(host, port);
const db = new PostgresDatabase();


server.getRouter().get("/test", (ctx) => {
    ctx.response.body = "Hello World!"
})

await server.addMiddleware(requestLogger);
await server.addMiddleware(responseTimeHeader);


server.getRouter().get("/bla", (ctx) => {
    window.setTimeout(function () {

        console.log("Timeout")
    }, 1000)
    ctx.response.body = "Blub"
})
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
