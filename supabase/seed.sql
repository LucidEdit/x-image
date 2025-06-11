-- Note: RLS is already enabled by default on storage.objects in Supabase
-- Secure policies for x-images bucket (public community feed)

-- Allow public read access to PNG files in x-images bucket
CREATE POLICY "Allow SELECT on x-images PNG files"
ON storage.objects
FOR SELECT
TO public
USING ((bucket_id = 'x-images'::text) AND (storage.extension(name) = 'png'::text));

-- Allow public upload of PNG files to x-images bucket
CREATE POLICY "Allow INSERT on x-images PNG files"
ON storage.objects
FOR INSERT
TO public
WITH CHECK ((bucket_id = 'x-images'::text) AND (storage.extension(name) = 'png'::text)); 