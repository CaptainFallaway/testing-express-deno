set dotenv-load

run:
    deno run --allow-env --allow-net=$HOST:$PORT --allow-read --watch main.ts