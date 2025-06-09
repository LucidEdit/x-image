"use server";

import {
  createXImage,
  getXImages,
  getXImageByFilename,
} from "@/db/queries/x-images-queries";
import { InsertXImage, SelectXImage } from "@/db/x-image-schema";
import { ActionState } from "@/types";
import { revalidatePath } from "next/cache";

export async function createXImageAction(
  xImage: InsertXImage,
): Promise<ActionState<SelectXImage>> {
  try {
    const newXImage = await createXImage(xImage);
    revalidatePath("/");
    return {
      isSuccess: true,
      message: "X-Image created successfully",
      data: newXImage,
    };
  } catch (error) {
    console.error("Error creating x-image:", error);
    return { isSuccess: false, message: "Failed to create x-image" };
  }
}

export async function getXImagesAction(
  limit: number = 10,
  offset: number = 0,
): Promise<ActionState<SelectXImage[]>> {
  try {
    const xImages = await getXImages(limit, offset);
    return {
      isSuccess: true,
      message: "X-Images retrieved successfully",
      data: xImages,
    };
  } catch (error) {
    console.error("Error getting x-images:", error);
    return { isSuccess: false, message: "Failed to get x-images" };
  }
}

export async function getXImageByFilenameAction(
  filename: string,
): Promise<ActionState<SelectXImage | undefined>> {
  try {
    const xImage = await getXImageByFilename(filename);
    return {
      isSuccess: true,
      message: "X-Image retrieved successfully",
      data: xImage,
    };
  } catch (error) {
    console.error("Error getting x-image by filename:", error);
    return { isSuccess: false, message: "Failed to get x-image" };
  }
}
