import { ensureConnected, withSupabaseAuthRetry } from './authHelpers';
import { supabase } from '../supabase/supabaseClient';

export const loadExampleRow = async () => {
  await ensureConnected();

  const result = await withSupabaseAuthRetry(async () => {
    const response = await supabase
      .from('some_table')
      .select('*')
      .limit(1);

    if (response.error) {
      throw response.error;
    }

    return response.data;
  });

  return result;
};
