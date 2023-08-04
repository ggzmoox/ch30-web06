console.log("Página en construcción con Bob");

function clickBob(){
    alert("Buena esa Calamardo!");
}


/* Función para cambiar el color al texto dando clic sobre ellos */
function changeColor1(element, color) {
    element.style.color = color;
}
function changeTextOfUserColor(element, color){
    element.innerHTML = "<h3> Mi color es <em>" + color + "</em></h3>";
    element.style.color = color;
}

/* Función para cambiar color del texto escribiendo el color en el cuadro de texto y dando clic al boton enviar */
/* function changeColor2() {
    var colorInput = document.getElementById("inputColor").value;
    var heading = document.getElementById("frase");

    // Verificar si el color ingresado es válido
    if (isValidColor(colorInput)) {
        heading.style.color = colorInput;
    } else {
        // Si no es válido, mostrar un mensaje de error o usar un color predeterminado.
        alert("Por favor, ingrese un color válido en formato hexadecimal o nombre de color.");
    }
} */

// Función para validar el color ingresado
/* function isValidColor(color) {
    var s = new Option().style;
    s.color = color;
    return s.color === color;
}
 */
/* funcion que cambia el color dando clic en el texto y cambiando los valores desde un prompt */
function changeColorWithPromt(elementHtml){
    const color = prompt("Dime el color en ingles", "yellow");
    changeTextOfUserColor(elementHtml, color);
    changeColor1( elementHtml, color);
}

/* Funcion Resetear colores */
function resetColor(){
    const refGreenColor = document.getElementById("greenColor");
    const refRedColor = document.getElementById("redColor");
    const refPurpleColor = document.getElementById("purpleColor");
    const refUserColor = document.getElementById("user-color");

    /* refGreenColor.style.color = "Black"; */
    changeColor1(refGreenColor, "Black");
    changeColor1(refRedColor, "Black");
    changeColor1(refPurpleColor, "Black");
    changeTextOfUserColor(refUserColor, "black");

}


function changeName(){
    const newName = prompt("Cual es tu nombre?")
    document.getElementById("name").innerHTML = "Hola " + newName;
}