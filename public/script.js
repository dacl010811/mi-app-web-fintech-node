// Efecto de carga dinámica
console.log('🚀 Fintech App cargada correctamente');

// Actualizar versión automáticamente
document.addEventListener('DOMContentLoaded', () => {
  const versionEl = document.getElementById('version');
  if (versionEl) {
    const date = new Date();
    versionEl.textContent = `v2.0.0 · ${date.toLocaleDateString('es-ES')}`;
  }
  
  // Efecto de bienvenida
  console.log('✨ Bienvenido a Fintech App');
});