console.log("Bienvenido a la sesión j01");
// Datos primitivos:
// numbers, string, boolean, bigInt, Symbol, null, undefined

// Tipos de datos en Js:
// Primitivos y no primitivos

// No primitivos: 
// objetos

// tipo de dato string
const stringData ="Holi crayoli";
console.log(stringData);

// tipo de dato number
// números positivos, negativos, decimales, NaN, +infinity, -infinity
console.log( `Tipos de datos number: ${12}, ${-6}, ${0.456}, ${5*"hola"}, ${45/0}, ${-45/0} `);
console.log(`valor máximo representable en JavaScript: ${ Number.MAX_VALUE }`) //1.7976931348623157e+308
console.log( `si el valor es mayor a MAX_VALUE como 1.79e310: ${1.79e310}`); // Infinity

console.log(`valor máximo (entero) seguro e JavaScript: ${Number.MAX_SAFE_INTEGER}`); // 9007199254740991
// Cuando se relizan operaciones que exceden los limites de MAX_SAFE_INTEGER
// se produce una pérdida de precisión.
console.log(`MAX_SAFE_INTEGER + 1: ${Number.MAX_SAFE_INTEGER + 1}`); // 9007199254740992
console.log(`MAX_SAFE_INTEGER + 2: ${Number.MAX_SAFE_INTEGER + 2}`); // 9007199254740992 incorrecto
console.log(`MAX_SAFE_INTEGER + 3: ${Number.MAX_SAFE_INTEGER + 3}`); // 9007199254740994
console.log(`MAX_SAFE_INTEGER + 4: ${Number.MAX_SAFE_INTEGER + 4}`); // 9007199254740996 incorrecto

// tipos de dato bigInt
// sirven para representar valornúmericos enteros, de los que el tipo number
// no puede representar o no es seguro.
console.log("Operacionescon bigInt");
const myBigInt = 9007199254740991n;
console.log(`MAX_SAFE_INTEGER + 1: ${myBigInt + 1n }`); // 9007199254740992
console.log(`MAX_SAFE_INTEGER + 2: ${myBigInt + 2n }`); // 9007199254740993
console.log(`MAX_SAFE_INTEGER + 3: ${myBigInt + 3n }`); // 9007199254740994
console.log(`MAX_SAFE_INTEGER + 4: ${myBigInt + 4n }`); // 9007199254740995

// tipo de dato boolean
// se tiene 2 estados: true / false

console.log ( `Tipo de dato verdadero: ${true} `);
console.log ( `Tipo de dato falso: ${false} `);

// tipo de dato undefined
// Una variable que es declarada pero el tipo de dato no es definido
let myVar;
console.log(`Tipo de dato undefined: ${myVar}`); // undefined


// tipo de dato null
// Una variable que intencionalmente se borra el tipo de dato
let myVarNull;
console.log(`Tipo de dato undefined: ${ typeof myVarNull }`); // undefined
myVarNull = "No me gusta YLE";
console.log(`Tipo de datos myVarNull: ${ typeof myVarNull }`); // string
myVarNull = null;
console.log(`Tipo de dato myVarNull: ${ typeof myVarNull }`); // object
console.log(`myVarNull es null: ${ myVarNull === null }`); // object

// tipo de dato symbol
// representa un valor único que se puede utilizar como clave en objetos o indentificador unico
const mySymbol = Symbol();
const mySymbol2 = Symbol();
const myKey = "codigo";
console.log( `mySymbol === mySymbol2  ${ mySymbol === mySymbol2 }`);

const myObj ={
    clave:"valor",
    [mySymbol] : 16, // se creará una clave privada, esta no se itera con un ciclo, no se almacena LocalStorage
    myKey : 123,
    [myKey] : 567,
}

console.log( myObj )

// ----------------------------- Objetos em JavaScript ----------------------------------------------
// tipo Array
const cancionesCh30 = ["Highway Star", "Trouble", "Saoko", "Rock Dj"];

// Tipos de datos object
const misDatosDePerfil = {
    name: "David",
    lastName: "Olea",
    age: 29,
    isBelicoso: false,
    fullName: function(){
        return `Nombre completo de David: ${this.name} ${this.lastName}`; 
    },
    //Agregar una funcion que muestre el nombre completo en mayusculas

    fullNameMayus: function(){
        /* return `Nombre completo de David en Mayusculas: ${this.name.toUpperCase()} ${this.lastName.toUpperCase()}`;  */
        return this.fullName().toUpperCase();
    }
}

console.log(misDatosDePerfil);
console.table(misDatosDePerfil);
console.log(misDatosDePerfil.fullName); // f()
console.log(misDatosDePerfil.fullName()); // David Olea
console.log(misDatosDePerfil.fullNameMayus()); // DAVID OLEA


//------------------------------- Conversion explicita de datos -------------------------------------------
const horaDescanso= 13.05;
console.log ("Hora Descanso " + horaDescanso + "h."); // concatenacion
const horaDescansoTxt= String( horaDescanso );
console.log ("Hora Descanso " + horaDescansoTxt + "h.");
console.log ("Hora de Retorno " + horaDescanso + .15);

const colorVerde = 0x008000; // Representacion Decimal
console.log(`El valor RGB del color verde es: ${colorVerde}`); // 32768
console.log(`El valor RGB del color verde es: ${colorVerde.toString()}`); // 32768
console.log(`El valor RGB del color verde es: ${colorVerde.toString(16)}`); // 8000
console.log(`El valor RGB del color verde es: #${colorVerde.toString(16).padStart(6, "0")}`); // #008000

/* conversion a number */

const myAgeTxt = "29";
const sumatoria = 10 + myAgeTxt; //
console.log (`Valor de la sumatoria ${sumatoria}`); // 1025

console.log (`Valor de la sumatoria ${10 + Number(myAgeTxt)}`); // 39
console.log (`Valor de la sumatoria ${10 + parseInt(myAgeTxt)}`); // 39
console.log (`Valor de la sumatoria ${10 + parseFloat(myAgeTxt)}`); // 39
console.log (`Valor de la sumatoria ${10 + (+myAgeTxt)}`); // 39