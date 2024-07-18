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