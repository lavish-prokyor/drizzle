import { migrate } from "drizzle-orm/node-postgres/migrator";
import { db } from "../src/db/db";
import path from "path";

async function runMigrations() {
    try {
        await migrate(db, { migrationsFolder: path.resolve("drizzle") }); // ✅ Updated path
        console.log("✅ Migrations completed successfully.");
        process.exit(0);
    } catch (err) {
        console.error("❌ Migrations failed!", err);
        process.exit(1);
    }
}

runMigrations();

