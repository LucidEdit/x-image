import { config } from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { xImagesTable } from "@/db/x-image-schema";

config({ path: ".env.local" });

const schema = {
  xImages: xImagesTable,
};

const client = postgres(process.env.X_IMAGE_DATABASE_URL!);

export const xImageDb = drizzle(client, { schema });
