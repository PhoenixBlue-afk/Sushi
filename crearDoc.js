async function guardarConfirmacion(nombre) {
    console.log("🟢 Intentando guardar confirmación para:", nombre);
    
    try {
        const respuesta = await fetch('/guardar-confirmacion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nombre: nombre,
                confirmacion: 'Sí', // Cambiado de 'Si' a 'Sí'
                fecha: new Date().toLocaleString()
            })
        });
        
        console.log("📡 Respuesta recibida:", respuesta.status);
        
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        
        const resultado = await respuesta.json();
        console.log("✅ Resultado:", resultado.mensaje);
        alert('✅ ¡Tu confirmación se guardó en el servidor! 🍣');
        
    } catch (error) {
        console.error('❌ Error detallado:', error);
        alert('⚠️ Error al guardar. Asegúrate que el servidor esté corriendo.');
    }
}
document.getElementById("Ok-status").onclick = () => {
    guardarConfirmacion("Invitado");
};