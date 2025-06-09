"use server";

import { desc, eq } from "drizzle-orm";
import { xImageDb } from "@/db/x-image-db";
import { InsertXImage, xImagesTable } from "@/db/x-image-schema";

export const createXImage = async (data: InsertXImage) => {
  try {
    const [newXImage] = await xImageDb
      .insert(xImagesTable)
      .values(data)
      .returning();
    return newXImage;
  } catch (error) {
    console.error("Error creating x-image:", error);
    throw new Error("Failed to create x-image");
  }
};

export const getXImages = async (limit: number = 10, offset: number = 0) => {
  try {
    return await xImageDb.query.xImages.findMany({
      orderBy: [desc(xImagesTable.createdAt)],
      limit,
      offset,
    });
  } catch (error) {
    console.error("Error getting x-images:", error);
    throw new Error("Failed to get x-images");
  }
};

export const getXImageByFilename = async (filename: string) => {
  try {
    return await xImageDb.query.xImages.findFirst({
      where: eq(xImagesTable.filename, filename),
    });
  } catch (error) {
    console.error("Error getting x-image by filename:", error);
    throw new Error("Failed to get x-image");
  }
};
