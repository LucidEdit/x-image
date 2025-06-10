-- Note: RLS is already enabled by default on storage.objects in Supabase
-- Very open policy for x-images bucket (public community feed)
CREATE POLICY "Allow all operations on x-images bucket"
ON storage.objects
FOR ALL
TO public
USING (bucket_id = 'x-images')
WITH CHECK (bucket_id = 'x-images'); 