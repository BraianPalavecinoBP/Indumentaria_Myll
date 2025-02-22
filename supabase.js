const { createClient } = require('@supabase/supabase-js');

// Reemplaza con la URL y la clave API de tu proyecto en Supabase
const SUPABASE_URL = 'https://qjcuvcbgglygimfaooop.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFqY3V2Y2JnZ2x5Z2ltZmFvb29wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5MDgxOTAsImV4cCI6MjA1NTQ4NDE5MH0.g7NqG_yuBVr2Jf-5md2cC_g9Q6hGHQAUvNzR38qFWFw';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
module.exports = supabase;
