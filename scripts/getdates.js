document.addEventListener("DOMContentLoaded", function() {
    const currentYearSpan = document.getElementById("currentyear");
    const lastModifiedParagraph = document.getElementById("lastModified");

    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;

    currentYearSpan.textContent = currentYear;
    lastModifiedParagraph.textContent = `Last modified: ${lastModified}`;
});