import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

config({ path: ".env.local" });

export default defineConfig({
  schema: "./db/x-image-schema/index.ts",
  out: "./db/x-image-migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.X_IMAGE_DATABASE_URL!,
  },
});
