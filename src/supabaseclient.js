// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mfsahrhauqwsnjphfdss.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1mc2FocmhhdXF3c25qcGhmZHNzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg4OTM4ODMsImV4cCI6MjA2NDQ2OTg4M30.ieE895a9sROvqfYIaQLTdfFnhPIH7oOxI_udBH4OijA";
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
