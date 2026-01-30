import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vrwtdtmnbyhaehtitrlb.supabase.co';
const supabaseAnonKey = 'sb_publishable_xE5IYBsNg0HgRbPsmyhF6w_k7O-wj7B';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
