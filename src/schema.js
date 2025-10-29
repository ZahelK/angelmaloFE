import { z } from 'zod';

const limpiarRut = (rut) => {
  if (!rut) return '';
  
  // Reemplaza SÓLO todos los puntos por una cadena vacía.
  // Mantiene el guion y el dígito verificador.
  return rut.replace(/\./g, "").toUpperCase(); 
};

const validarRutChileno = (rutCompletoLimpio) => {
    // 1. Verificar formato (debe contener un guion después de la limpieza de puntos)
    if (!/^[0-9]+-[0-9kK]{1}$/.test(rutCompletoLimpio)) {
        return false; 
    }

    const tmp = rutCompletoLimpio.split('-');
    let digitoVerificador = tmp[1];
    let rut = tmp[0]; // El cuerpo del RUT sin el DV

    if (digitoVerificador == 'K') digitoVerificador = 'k';

    // 2. Cálculo del Dígito Verificador (Módulo 11)
    let M = 0;
    let S = 1;
    // Recorre el RUT de derecha a izquierda
    for (; rut; rut = Math.floor(rut / 10)) {
        S = (S + (rut % 10) * (9 - (M++ % 6))) % 11;
    }
    const dvCalculado = S ? S - 1 : 'k';

    // 3. Comparación
    return dvCalculado == digitoVerificador;
};

// --- EL ESQUEMA ZOD ---
export const rutSchema = z.object({
  rut: z.string({
    required_error: "El RUT es obligatorio",
  })
    .trim() // Elimina espacios al inicio y final
    .min(1, "El RUT no puede estar vacío")
    // **AQUÍ ESTÁ LA CLAVE: Usamos .refine()**
    .refine(validarRutChileno, {
      message: "El RUT ingresado no es válido (ej: 12345678-K)",
    }),
});

export const formSchema = z.object({
  nombre: z.string({
    required_error: "El nombre es obligatorio",
  }).min(2, "El nombre debe tener al menos 2 caracteres"),

  // Ejemplo de validación para RUT (puede ser más compleja, esto es básico)
  rut: z.string({
    required_error: "El RUT es obligatorio",
  })
    .trim()
    .min(3, "RUT demasiado corto")
    
    // 1. ✨ TRANSFORMACIÓN CLAVE: Quita los puntos.
    // Ej: "20.765.323-3" -> "20765323-3"
    .transform(limpiarRut)
    
    // 2. REFINAMIENTO: La validación del DV se aplica al RUT *sin puntos*
    .refine(validarRutChileno, {
      message: "El RUT ingresado no es válido o el dígito verificador no coincide.",
    }), 

  correo: z.string({
    required_error: "El correo es obligatorio",
  }).email("Formato de correo no válido"),

  // Ejemplo de validación para un número de teléfono (mínimo 8 dígitos)
  numero: z.string({
    required_error: "El número es obligatorio",
  }).regex(/^\d{8,12}$/, "El número debe tener entre 8 y 12 dígitos"),
});