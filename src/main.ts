import {Application} from "./deps.ts";

console.log("Starting Senkapaj Core...")

const host = Deno.env.get("HOST") || "127.0.0.1";
const port = Deno.env.get("PORT") || 8080;

const app = new Application();

app.use((ctx) => {
    ctx.response.body = "Hello world!";
});

console.log(`Listing on ${host}:${port}`)
await app.listen(`${host}:${port}`);
