import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";
import { createXImageAction } from "@/actions/db/x-images-actions";

const X_IMAGE_BUCKET_NAME = "x-images";

export async function uploadXImage(
  blob: Blob,
  preset: string,
  htmlInput: string,
): Promise<{ url: string; filename: string; id: string }> {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );

    // Create filename with timestamp for natural sorting
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const filename = `${timestamp}-${uuidv4()}-${preset}.png`;

    const { error: uploadError } = await supabase.storage
      .from(X_IMAGE_BUCKET_NAME)
      .upload(filename, blob, {
        contentType: "image/png",
        upsert: false,
      });

    if (uploadError) {
      console.error("Error uploading x-image:", uploadError);
      throw new Error(`Failed to upload image: ${uploadError.message}`);
    }

    // Get public URL
    const { data } = supabase.storage
      .from(X_IMAGE_BUCKET_NAME)
      .getPublicUrl(filename);

    // Save metadata to database using server action
    const result = await createXImageAction({
      filename,
      preset,
      url: data.publicUrl,
      htmlInput,
    });

    if (!result.isSuccess || !result.data) {
      throw new Error(result.message);
    }

    return {
      url: data.publicUrl,
      filename,
      id: result.data.id,
    };
  } catch (error) {
    console.error("Error in uploadXImage:", error);
    if (error instanceof Error) {
      throw error;
    }
    throw new Error("An unexpected error occurred while uploading the image");
  }
}
