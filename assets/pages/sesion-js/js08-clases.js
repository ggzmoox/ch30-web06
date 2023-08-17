console.log(`Sesión js08 Clases`);


const getProducts = async () => {
    const url = "https://fakestoreapi.com/products";
    /* const url = "https://reqres.in/api/users?page=2"; */


    const responseJSON = await fetch(url);
    const response = await responseJSON.json();
    console.log(response);
}

/**
 * Clase productos
 * El nombre de la clase se realizaron UpperCammelCase
 */

class Products{
        // defnimos atributos

        // el metodo constructor nos ayuda a instanciar un objeto
        constructor(id, name){
            this.name = name; // crando el atributo name y le asignamos el valor de parametro name
            this.id = id;
            this.createdAt = new Date().getTime();
            console.log(`Producto ${this.name} se creó el ${new Date().toLocaleString()}`);
        }

        lifeSpan(){
            return new Date().getTime() - this.createdAt;
        }
}

function createProductsOfClassProducts(){
    // instanciar la clase products para crear un objeto
    const zote = new Products(1, "zote");
    const products = [];
    products.push(zote);
    products.push(new Products(2, "Palmolive"));
    products.push(new Products(3, "Coca-cola 2l"));
    products.push(new Products(4, "Cajeta Coronado"));

    console.table(products);
}

createProductsOfClassProducts();