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
