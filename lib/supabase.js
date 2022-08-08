import { createClient } from "@supabase/supabase-js";

// After creating your project on supabase, go to :
// Project > Settings > API
// - SUPABASE_URL is under the name "Project URL"
// - SUPABASE_KEY is under the name "anon public"

// More infos https://supabase.com/docs/guides/with-nextjs#initialize-a-nextjs-app

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_KEY
);
