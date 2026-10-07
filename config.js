// ARCHIVO DE CONFIGURACIÓN: pegá acá la URL y la clave de Supabase UNA sola vez.
// Al actualizar index.html NO hace falta tocar este archivo. Vacío = modo solo local.
window.CONFIG = {
  SUPABASE_URL: "",       // ej: https://xxxx.supabase.co
  SUPABASE_KEY: "",       // anon public key
  USERS: {
    independencia: { n: "Independencia", p: "INDCV", role: "suc" },
    paunero:       { n: "Paunero",       p: "PAUCV", role: "suc" },
    arenales:      { n: "Arenales",      p: "ARECV", role: "suc" },
    sanmartin:     { n: "San Martín",    p: "SMCV",  role: "suc" },
    calidad:       { n: "Calidad",       p: "CALIDADCV", role: "cal" }
  }
};
