import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vrwtdtmnbyhaehtitrlb.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyd3RkdG1uYnloYWVodGl0cmxiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgxMDU2OTEsImV4cCI6MjAyMzY4MTY5MX0.I6uFNCUTnIzdTcXk4lWsh-LNE4ZXJKwnFUId2HGN7rI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
