console.log("Sésion js06 Manipulacion del DOM");

const findElementById = () => {
const title = document.getElementById("title");

console.log(title);
console.log(typeof title);
console.log(title.innerHTML); 

title.innerHTML = "<span class='text-primary'>Generation</span> - Sesion J06"

}

findElementById();

// ----------------------- Encontrar elemento por su etiqueta (tag) --------------------------------

const changeElementByTagName = () =>{
      const unorderList = document.getElementsByTagName("li"); // coleccion de elementos
      console.log(unorderList); // HTML collection

      for (const listItem of unorderList) {
        listItem.innerHTML = `<span class="text-success fs-4"> ${listItem.innerHTML} </span>  `;
      }
}

changeElementByTagName();

// ------------------------ Uso de selector univeral -------------------------
// querySelector

const findElementByQuerySelector = () =>{
  /* const element = document.querySelector( "#title"); // seleccionar por id */
  /* const element = document.querySelector( ".text-warning"); // seleccionar por clase */
  /* const element = document.querySelector( "li"); // seleccionar por tag */
  const element = document.querySelector( "h1 span"); 
  console.log(element);
}
findElementByQuerySelector();

//----------------- Crear nuevo elemento HTML --------------------------
// appendChild

const newElement = () =>{
  const newElement = document.createElement ("div"); // <div>    </div>

  newElement.innerHTML = `La Ch30 le gusta:
   <ul>
      <li> El Helado </li>
      <li> El Chisme </li>
      <li> Los corridos tumbados </li>
      <li> Escuchar a Mau </li>
      <li> Ser mejores amigos de Anneth </li>
   </ul>
  `;

  const descriptionCh30 = document.querySelector("#descriptionCh30");
  descriptionCh30.appendChild( newElement );
}

newElement();

// ---------------- Cambiar el color de texto -----------------
// style.color

const changeColor = ( color ) => {
  const descriptionCh30 = document.getElementById("descriptionCh30");
  descriptionCh30.style.color = color; // Cambio de color de fuente
  descriptionCh30.style.border = `thin solid ${color}`;

}

changeColor( "beige" );

// ------------------ Propiedades de visualización ---------------
//                       Desaparecer el elemento
// display : none (quitar el elemento del DOM)
// visibility: hidden (ocultar el elemento)

const getReferenceTitleGeneration = () => {
return document.getElementById("generation");
}

const displayNoneElement = () => {
const generation = getReferenceTitleGeneration();
generation.style.display = "none"; // quitar el elemento
}

const hiddenElement = () => {
  const generation = getReferenceTitleGeneration();
  generation.style.visibility = "hidden"  // ocultar el elemento
}

const resetElements = () => {
  const generation = getReferenceTitleGeneration();
  generation.style.visibility = "visible"; 
  generation.style.display = "inline"; 

}

