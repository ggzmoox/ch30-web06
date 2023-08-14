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

//------------------------------ Crear nuevo elemento HTML --------------------------
// appendChild

const newElement = () =>{
  const newElement = document.createElement("div"); //<div></div>

  newElement.innerHTML = `La ch30 le guta:
  <ul>
     <li> El Helado </li> 
     <li> El Chisme </li> 
     <li> Los corridos tumbados </li> 
     <li> Escuchar a mau </li> 
     <li> Ser mejores amigos de Anneth </li> 
  </ul>
  `;
  const descriptionCh30 = document.querySelector("#decriptionCh30");
  descriptionCh30.appendChild(newElement);
}

newElement();