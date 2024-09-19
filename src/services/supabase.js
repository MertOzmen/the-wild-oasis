import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://huylemrjytyyqmxithgq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh1eWxlbXJqeXR5eXFteGl0aGdxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ3NjMxNTQsImV4cCI6MjA0MDMzOTE1NH0.EwoKXcmFpw28jja5skxoAyZ0BTU0q1KC67T7VNhIlzU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
