import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const xImagesTable = pgTable("x_images", {
  id: uuid("id").defaultRandom().primaryKey(),
  filename: text("filename").notNull().unique(),
  preset: text("preset").notNull(),
  url: text("url").notNull(),
  htmlInput: text("html_input").notNull().default("legacy-html-input"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull()
    .$onUpdate(() => new Date()),
});

export type InsertXImage = typeof xImagesTable.$inferInsert;
export type SelectXImage = typeof xImagesTable.$inferSelect;
