console.log(`Sesión js08 - OOP`);

const registerForm = document.forms["registerForm"];

registerForm.addEventListener( "submit", ( event )=>{
    event.preventDefault(); 

    const user = {
        fullname: registerForm.elements["fullname"].value, 
        email : registerForm.elements["email"].value, 
        password : registerForm.elements["password"].value,        
    }
    console.table(user);
    postUser(user);
    // Debemos convertir el objeto user a formato JSON
    localStorage.setItem("user", JSON.stringify(user)); // key, value
}  );

const postUser = async ( userData ) => {
    const url ="https://reqres.in/api/register";
    userData.email = "eve.holt@reqres.in"; // se requiere este email.


    // la respuesta de fetch lo recibimos en formato JSON
    const responseJSON = await fetch(url, {
        method: "POST", //POST, PUT, DELETE, GET
        body: JSON.stringify(userData), // Datos del usuario
        headers: {"Content-Type" : "application/json"},
    });

    const response = await responseJSON.json(); // Convertir de JSON a OBJ
    console.log(response);
    response.id && alert(`${response.id}: ${response.token}`);

    // iterar sobre un objeto

    for(const key in response){
        console.log(`clave: ${key}, value: ${ response[key]}`);
    }

}