
import { createClient } from '@supabase/supabase-js';

// IMPORTANT: Replace these with your actual Supabase project URL and anon key.
// It is highly recommended to use environment variables for this in a real project.
// For example, import.meta.env.VITE_SUPABASE_URL
const supabaseUrl = 'https://example.supabase.co'; // Replace with your Supabase URL
const supabaseAnonKey = 'example-anon-key'; // Replace with your Supabase anon key

if (supabaseUrl === 'https://example.supabase.co' || supabaseAnonKey === 'example-anon-key') {
  console.warn("Supabase credentials are not set. Please update services/supabaseClient.ts with your project's URL and anon key to enable database functionality.");
}


export const supabase = createClient(supabaseUrl, supabaseAnonKey);