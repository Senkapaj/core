FROM drentech/deno:1.1.0

COPY . /app

ENTRYPOINT deno run --allow-net --allow-env --allow-read src/main.ts
