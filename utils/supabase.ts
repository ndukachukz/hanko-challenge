import { env } from "../env.mjs";
import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  env.NEXT_PUBLIC_SUPABASE_URL,
  env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export const createBucket = await supabase.storage.createBucket("generated", {
  public: false,
  allowedMimeTypes: ["image/png"],
  fileSizeLimit: 1024,
});

/**
 * Uploads generated image to users table
 */
export function saveGeneratedImage(userId: string) {}
