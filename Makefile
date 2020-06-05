run:
	deno run src/main.ts

cache:
	DENO_DIR=./deno_dir deno cache src/deps.ts
