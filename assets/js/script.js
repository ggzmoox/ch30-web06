console.log("Página en construcción con Bob");

function clickBob(){
    alert("Buena esa Calamardo!");
}


/* Función para cambiar el color al texto dando clic sobre ellos */
    function changeColor1(element, color) {
        element.style.color = color;
    }

/* Función para cambiar color del texto escribiendo el color en el cuadro de texto y dando clic al boton enviar */
function changeColor2() {
    var colorInput = document.getElementById("inputColor").value;
    var heading = document.getElementById("frase");

    // Verificar si el color ingresado es válido
    if (isValidColor(colorInput)) {
        heading.style.color = colorInput;
    } else {
        // Si no es válido, mostrar un mensaje de error o usar un color predeterminado.
        alert("Por favor, ingrese un color válido en formato hexadecimal o nombre de color.");
    }
}

// Función para validar el color ingresado
function isValidColor(color) {
    var s = new Option().style;
    s.color = color;
    return s.color === color;
}

