console.log("Sesion JS04 matrices y bucles");


// Declaramos un arreglo de 2 dimensiones (matriz).
// Arrays anindados
// [ [], [], []   ]

const personasEnCh30 = [
    ["Luis", "Allan", "Anneth", "Maryluz"], /* ByteMe */ /* indice 0 */
    ["Ed", "Jimena", "Marifer", "Leo", "Alejandro"], /* PerryCode */ /* indice 1 */
    ["Lu", "Leo", "Daniel", "Gina"]  /* BugBusters */ /* indice 2 */
];

console.log(`Integrantes de BugBusters: ${personasEnCh30[2]}`); // Lu,Leo,Daniel,Gina
console.log(`Integrantes de BugBusters: ${personasEnCh30[2].join(", ")}`); // Lu, Leo, Daniel, Gina
console.log(`Integrante de BugBusters no 1: ${personasEnCh30[2,0].join(", ")}`); // Lu

/* personasEnCh30[1][3] = "Brayan"; */
personasEnCh30[1].splice(3, 1, "Brayan")
console.table(personasEnCh30);

// iterando elementos

for (let equipo = 0; equipo < personasEnCh30.length /* filas */; equipo++) {
    for (let persona = 0; persona < personasEnCh30[equipo].length; persona++){
        console.log( personasEnCh30[ equipo ][ persona ]);
    }
    
}

// ----------------------- Uso de for... of ------------------
/* Ejecuta una sentencia por cada elemento de un objeto iterable(array, colección, string).
Sintaxis:
    for (const iterator of object) {
    
    }
*/
console.table( personasEnCh30 ); 

const myPet = "Kraken";
for (const character of myPet  ){
    console.log( character );
}
myPet.split("").forEach( character => console.log( character ))


for (const equipo of personasEnCh30 ) {
    console.log( equipo ); // Arreglo de equipos
    for (const persona of equipo) {
        console.log( persona ); //  Persona de cada equipo
    }
}

// ---------------- forEach -------------------------
/*
 Método que se utiliza para iterar colecciones, arreglos.
 Permite ejecutar una función por cada elemento del arreglo.

*/
console.table( personasEnCh30 ); 

function iterarEquipos( equipo, indice, arreglo ){
    console.log(`Indice ${indice}: ${equipo} `)
    equipo.forEach(  iterarPersonas  );
    return equipo; // arreglo de cada equipo integrador
}

function iterarPersonas( persona, indice ){
    console.log(`Indice P ${indice}: ${persona} `)
    return persona;
}


// personasEnCh30.forEach( iterarEquipos );

personasEnCh30.forEach( (equipo, indexEquipo) => 
                    equipo.forEach( (persona, indexPer)=> 
                    console.log(` [${indexEquipo}][${indexPer}] : ${persona}` )));
 
// Solo se imprimi el elemento (persona)                    
//personasEnCh30.forEach( equipo => equipo.forEach( persona=> console.log(`${persona}`)));

// Realizar tablas de multiplicar de 1 al 5 con for tradicional
/* 
1 * 1 = 1
1 * 2 = 2

...

5 * 9 = 45 
5 * 10 = 50
*/

rompeCicloSuperior:
for (let i = 1; i < i <= 5; i++) {

    for (let j=1; j<=10; j++){
        if (i===2 && j===5) break rompeCicloSuperior;
        console.log(`${i} * ${j} = ${i*j}`);
        
    }
    
}

//------------------- uso de continue-------------------

/* 
Termina la ejecucion en la iteracion actual y continua con la próxima iteración.
(o en el tag que se identifique).
*/

console.log("======== Uso de break con tag ========")
// Realizar la multiplicacion hasta en 3
// 1*1, 1*2, 1*3 ... 2*3...5*3

continuaCicloSuperior:
for (let i = 1; i <= 5; i++) {

    for (let j=1; j<=10; j++){
        if (j>3) continue continuaCicloSuperior;
        console.log(`${i} * ${j} = ${i*j}`);
        
    }
}

