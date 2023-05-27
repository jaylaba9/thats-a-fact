import { createClient } from '@supabase/supabase-js';
import apiKey from './config';

const supabaseUrl = 'https://enbylyxkjeglcpatjpai.supabase.co';
const supabaseKey = apiKey;
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
