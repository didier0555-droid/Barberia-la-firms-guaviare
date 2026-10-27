// Configuración de Supabase para sitio estático
// Esta clave es PÚBLICA (anon/publishable) y es segura para usar en el navegador
// NUNCA pongas aquí la service_role key o cualquier clave secreta
const SUPABASE_URL = 'https://dwakuuqbhvjxuncjyekn.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_5qWXTUdQ0AJIXyy6rBtf5A_MwrNN3yL';

// Inicializar cliente de Supabase
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
