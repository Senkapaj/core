run:
	deno run --allow-net --allow-env --allow-read src/main.ts

watch:
	denon run --allow-net --allow-env --allow-read src/main.ts

cache:
	DENO_DIR=./deno_dir deno cache src/deps.ts

deps-global:
	deno install --allow-read --allow-run --allow-write -f --unstable https://deno.land/x/denon/denon.ts
