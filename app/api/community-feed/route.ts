import { NextRequest, NextResponse } from "next/server";
import { getXImagesAction } from "@/actions/db/x-images-actions";
import { XImageFeedResponse } from "@/types";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");

    // Calculate offset for pagination
    const offset = (page - 1) * limit;

    // Get images from database with one extra to check if there are more
    const result = await getXImagesAction(limit + 1, offset);

    if (!result.isSuccess || !result.data) {
      console.error("Error fetching x-images:", result.message);
      return NextResponse.json({ error: result.message }, { status: 500 });
    }

    const images = result.data;

    // Check if there are more images
    const hasMore = images.length > limit;
    const responseImages = images.slice(0, limit); // Remove the extra item

    // Transform to match XImage interface
    const xImages = responseImages.map((image) => ({
      id: image.id,
      filename: image.filename,
      preset: image.preset,
      url: image.url,
      createdAt: image.createdAt.toISOString(),
      updatedAt: image.updatedAt.toISOString(),
    }));

    const response: XImageFeedResponse = {
      images: xImages,
      hasMore,
      nextPage: hasMore ? page + 1 : undefined,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error in x-image feed API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
