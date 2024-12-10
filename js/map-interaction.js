// Agregar interacción al mapa
document.addEventListener("DOMContentLoaded", () => {
    const countries = document.querySelectorAll("#countries path");

    countries.forEach(country => {
        // Evento al pasar el cursor sobre un país
        country.addEventListener("mouseenter", () => {
            const countryName = country.id.charAt(0).toUpperCase() + country.id.slice(1);
            showCountryInfo(countryName);
        });

        // Evento al salir del país
        country.addEventListener("mouseleave", () => {
            hideCountryInfo();
        });

        // Evento al hacer clic en un país
        country.addEventListener("click", () => {
            const countryName = country.id.charAt(0).toUpperCase() + country.id.slice(1);
            alert(`Has seleccionado ${countryName}`);
        });
    });
});

// Función para mostrar información de un país
function showCountryInfo(countryName) {
    const infoBox = document.createElement("div");
    infoBox.id = "info-box";
    infoBox.style.position = "absolute";
    infoBox.style.padding = "10px";
    infoBox.style.background = "rgba(0, 0, 0, 0.7)";
    infoBox.style.color = "#fff";
    infoBox.style.borderRadius = "5px";
    infoBox.style.pointerEvents = "none";
    infoBox.style.zIndex = "1000";
    infoBox.textContent = `País: ${countryName}`;

    document.body.appendChild(infoBox);

    // Actualizar posición del info-box
    document.addEventListener("mousemove", (e) => {
        infoBox.style.top = `${e.clientY + 15}px`;
        infoBox.style.left = `${e.clientX + 15}px`;
    });
}

// Función para ocultar la información del país
function hideCountryInfo() {
    const infoBox = document.getElementById("info-box");
    if (infoBox) {
        infoBox.remove();
    }
}
