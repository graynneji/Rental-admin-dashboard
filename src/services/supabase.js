import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://nmqbckwbbtwibyekyehe.supabase.co";
// export const supabaseUrl = "https://djfomvrcddgktaafqgwm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tcWJja3diYnR3aWJ5ZWt5ZWhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE2NDczNDQsImV4cCI6MjA2NzIyMzM0NH0.avnXnQ8d1M3dLrtGDq8CiwzXKCgEadVLaYPNj-3E1Hs";
  // "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRqZm9tdnJjZGRna3RhYWZxZ3dtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTExOTU5NzIsImV4cCI6MjAyNjc3MTk3Mn0.p4Re8J_0h47QwPCxtd3gjxb1NF2pDkxoJOR7oiGXCxY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
