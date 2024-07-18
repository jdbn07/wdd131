document.addEventListener('DOMContentLoaded', (event) => {
    const fechaModificacion = document.lastModified;
    document.getElementById('fecha-modificacion').textContent = fechaModificacion;
});
// Función para abrir el modal
function openModal(element) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = element.src;
    captionText.innerHTML = element.alt;
}

// Función para cerrar el modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
document.addEventListener("DOMContentLoaded", function() {
    // Función para obtener el clima de Guayaquil
    async function obtenerClima() {
        const apiKey = '15aa0c4a7973b67855a312ed8fab45e5';  // Reemplaza 'TU_API_KEY' con tu clave de API de OpenWeatherMap
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Guayaquil,EC&units=metric&appid=${apiKey}`;
        
        try {
            const response = await fetch(url);
            const data = await response.json();

            const descripcion = data.weather[0].description;
            const temperatura = data.main.temp;

            document.getElementById('clima-descripcion').textContent = `Weather: ${descripcion}`;
            document.getElementById('clima-temperatura').textContent = `Temperature: ${temperatura}°C`;
        } catch (error) {
            console.error('Error al obtener el clima:', error);
        }
    }

    // Llamar a la función para obtener el clima
    obtenerClima();

    // Función para mostrar la última fecha de modificación
    const fechaModificacion = document.lastModified;
    document.getElementById('fecha-modificacion').textContent = fechaModificacion;
});