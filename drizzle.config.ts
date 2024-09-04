import { defineConfig } from "drizzle-kit";
import { env } from "./src/app/env";

export default defineConfig({
    schema: './src/app/db/schema.ts',
    dialect: 'postgresql',
    out: './drizzle',
    dbCredentials: {
        url: env.DATABASE_URL,
    },
    verbose: true,
    strict: true,
});
