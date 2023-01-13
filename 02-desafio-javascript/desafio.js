/**
* * Bienvenidos a la segunda parte del desafío E-Contact, la cual esta destinada a evaluar los conocimientos adquiridos de Javascript.
* * Este prueba constará de 20 ejercicios

* * NOTA1: El examen es individual
* * NOTA2: Fecha límite de entrega: Miércoles 11/01/2023 - 23:59hs

* * INFORMACION SOBRE EL DESARROLLO DE LOS EJERCICIOS:
* * Algunos ejercicios no tendrán que operar con el arreglo u objeto establecido a continuación, otros sí.
* * NO MODIFICAR el arreglo y objeto definido a continuación:
* * (Los datos son ficticios. El objeto es evaluar los conocimientos del alumno)
*/

const arregloFijo = [1, 3, 4, 7, 12, 18, 20, 26];
const numerosReales = [34.4552, 25.1543, 17.9438, 90.5, 67.82, 5, 9.99, 62.037];

const objetoFijo = {
  empresa: "E-Contact",
  datos: {
    empleados: 100,
    direccion: {
      calle: "Calle Córdoba",
      numero: 476,
      piso: 3,
    },
    sectores: [
      "Contabilidad",
      "Finanzas",
      "Informática",
      "Atención al público",
    ],
    sedes: {
      Chile: { telefono: 56227566262, empleados: 35 },
      Peru: { telefono: 5116358614, empleados: 25 },
      EEUU: { telefono: 17864978777, empleados: 43 },
      Ecuador: { telefono: null, empleados: 19 },
      Colombia: { telefono: 3178952449, empleados: 28 },
    },
  },
};

//? ================================= INICIO DEL DESAFIO. EXITOS A TODOS !!! =============================================================================

/**
 *? EJERCICIO 1: Crear una función la cual reciba un parámetro de tipo string con el nombre de la persona y retornar un nuevo string
 *? dependiendo del largo del nombre:
 *? Si el largo se encuentra entre 0 y 5 retornar "Es un nombre corto. Su largo es de: "
 *? Si el largo es 11 o mayor retornar "Es un nombre largo. Su largo es de: "
 *? IMPORTANTE: validar que el parámetro recibido sea un string al inicio de la función, de lo contrario, retornar "El parámetro recibido es invalido"
 *? RECORDATORIO: al leer la sentencia "return" termina la ejecución de la función.
 */

 function largoDelNombre(nombre = "") {
  let resultado = ""
  if (typeof nombre === 'string') {
      if (nombre.length < 5 ) {
          resultado = `Es un nombre corto. Su largo es de: ${nombre.length}`;
      } else {
         if (nombre.length >= 11 ) {
          resultado = `Es un nombre largo. Su largo es de: ${nombre.length}`
          } else {
          resultado = `Es un nombre normal. Su largo es de: ${nombre.length}`
         } 
      }
      
  } else {
      resultado = "El parámetro recibido es invalido";
  }
  return resultado;
}

console.log(`${largoDelNombre("Constantinopla")}`);


//! =======================================================================================================================================================

/**
 *? EJERCICIO 2: Crear una función que reciba un arreglo como parámetro y cuente cuantos valores de tipo "number" se encuentran dentro de dicho arreglo
 */

 const arreglo = [1,'hola',3,false,'chao',12,13,true,1,2,3];

 function contarTipoNumber(arreglo) {
     let contador = 0;
     for (const pos in arreglo) {
         if (typeof arreglo[pos] === 'number' ) {
             contador +=1;
          } 
     }
 return contador;
 }    
 
 console.log(`La cantidad de tipo number es: ${contarTipoNumber(arreglo)}`);
 
 


//! =======================================================================================================================================================

/**
 *? EJERCICIO 3: Crear una función que reciba un objeto como parámetro con los claves nombre, edad y altura, y retornar un string usando template literals
 *? con el siguiente formato: "Esta persona se llama XXX, tiene XXX años y su altura es de XXX"
 *? NOTA: Desestructurar los valores del objeto antes de utilizarlos
 */

 
const persona = {nombre: 'Facundo', edad: 32, altura: 1.81};
const resultado = ""

function datosPersona(persona) {

const {nombre, edad, altura} = persona;
const resultado = `Esta persona se llama ${nombre}, tiene ${edad} años y su altura es de ${altura}`
return resultado;
}

console.log(`${datosPersona(persona)}`);



//! =======================================================================================================================================================

/**
 *? EJERCICIO 4: Crear una función que reciba 2 (dos) parámetros de tipo "number" con el inicio y fin del rango a operar. Evaluar cuántos números dentro de
 *? ese rango son "pares". Luego, retornar un string con la frase "La cantidad de números pares obtenido fue de: "
 *?
 */

 const arreglo = [1,2,3,4,5,6,7,8,9,10];
 const largo = arreglo.length
 resultado = ""
 contador = 0
 function obtenerCantidadDePares(numero1, numero2) {
 if (numero2 > (largo-1)) {
        resultado = `Numero 2 excede el largo del arreglo`
 } else {
     if (numero1 > numero2) {
        resultado = `El rango a analizar es 0`
     } else {
         for (let i = numero1; i <= numero2; i++) {
             valor1 = (Math.trunc(arreglo[i]/2))*2;
             if (arreglo[i] === valor1) {
                 contador +=1;
             } 
             
         }
         resultado = `El total de numeros pares en el rango es: ${contador}`
      }
     
 }
 return resultado;
 }
 
 console.log(`${obtenerCantidadDePares(1,4)}`)
 
 

//! =======================================================================================================================================================

/**
 *? EJERCICIO 5: Crear una función que reciba el "objetoFijo" definido al inicio y retornar la "cantidad" de sedes que posee.
 *? Ayuda inicial: Primero asegurarse de obtener correctamente el objeto "sedes"
 *? De ser necesario utilizar un "contador" (no es obligatorio para su resolución)
 *? Recordar el método "Object.keys(nombreDelObjeto)" nos devuelve un arreglo de strings con los claves del objeto.
 *?
 */

 const objetoFijo = {
  empresa: "E-Contact",
  datos: {
    empleados: 100,
    direccion: {
      calle: "Calle Córdoba",
      numero: 476,
      piso: 3,
    },
    sectores: [
      "Contabilidad",
      "Finanzas",
      "Informática",
      "Atención al público",
    ],
    sedes: {
      Chile: { telefono: 56227566262, empleados: 35 },
      Peru: { telefono: 5116358614, empleados: 25 },
      EEUU: { telefono: 17864978777, empleados: 43 },
      Ecuador: { telefono: null, empleados: 19 },
      Colombia: { telefono: 3178952449, empleados: 28 },
    },
  },
};

const econtact = objetoFijo

function obtenerCantidadDeSedes(econtact) {
const cantidad = Object.keys(objetoFijo.datos.sedes);
return cantidad.length;
}

console.log(`La cantidad de sedes es: ${obtenerCantidadDeSedes(econtact)}`)


//! =======================================================================================================================================================

/**
 *? EJERCICIO 6: Crear una función que reciba el "objetoFijo" definido al inicio y retornar el teléfono de "Peru".
 *? Validar al inicio de la función si el teléfono de Perú existe. Caso contrario retornar un string que diga "Perú no tiene asignado un teléfono"
 */
 
 const objetoFijo = {
  empresa: "E-Contact",
  datos: {
    empleados: 100,
    direccion: {
      calle: "Calle Córdoba",
      numero: 476,
      piso: 3,
    },
    sectores: [
      "Contabilidad",
      "Finanzas",
      "Informática",
      "Atención al público",
    ],
    sedes: {
      Chile: { telefono: 56227566262, empleados: 35 },
      Peru: { telefono: 5116358614, empleados: 25 },
      EEUU: { telefono: 17864978777, empleados: 43 },
      Ecuador: { telefono: null, empleados: 19 },
      Colombia: { telefono: 3178952449, empleados: 28 },
    },
  },
};

const paises = Object.keys(objetoFijo.datos.sedes);
let pos = 0;
fono = ""
valido = 0

function obtenerTelefonoPeru(pais) {
for (const pos in paises) {
  if (paises[pos] === pais) {
      valido = 1
      } 
  }
if (valido === 1) {
  fono = `El fono de ${pais} es ${objetoFijo.datos.sedes[pais].telefono}`;
} else {
  fono = "Sede no valida"
}
  return fono;
}

console.log(`${obtenerTelefonoPeru('Peru')}`);


//! =======================================================================================================================================================

/**
 *? EJERCICIO 7: Crear una función que reciba el "objetoFijo" definido al inicio y retornar la cantidad de paises que cuentan con telefono asignado
 *?
 */


 const objetoFijo = {
  empresa: "E-Contact",
  datos: {
    empleados: 100,
    direccion: {
      calle: "Calle Córdoba",
      numero: 476,
      piso: 3,
    },
    sectores: [
      "Contabilidad",
      "Finanzas",
      "Informática",
      "Atención al público",
    ],
    sedes: {
      Chile: { telefono: 56227566262, empleados: 35 },
      Peru: { telefono: 5116358614, empleados: 25 },
      EEUU: { telefono: 17864978777, empleados: 43 },
      Ecuador: { telefono: null, empleados: 19 },
      Colombia: { telefono: 3178952449, empleados: 28 },
    },
  },
};

const paises = Object.keys(objetoFijo.datos.sedes);
let pos = 0;
fono = ""
contador = 0
pais = null

function obtenerPaisesConTelefono(econtact) {

for (const pos in econtact.datos.sedes) {
  
  if (typeof econtact.datos.sedes[pos].telefono !== 'object') {
      contador +=1;
      } 
  }
return contador;
}

console.log(`El total de paises con telefono es de: ${obtenerPaisesConTelefono(objetoFijo)}`);



//! =======================================================================================================================================================

/**
 *? EJERCICIO 8: Crear una función que reciba 3 (tres) parámetros: uno de tipo "string" con la operación matemática a realizar,
 *? un segundo y tercer parámetro ambos de tipo number. Dependiendo de ello realizar la operación correspondiente y retornar el resultado de esa operación.
 *? Los valores permitidos a recibir son:
 *? "+"
 *? "-"
 *? "*"
 *? "/"
 *? En caso contrario, retornar un string con la frase "La operación matemática que intenta realizar es inexistente"
 */


let valor = 0
let respuesta = ''

function calculoMatematico(str1, str2, str3) {

if (str1 !== "+" && str1 !== "-" && str1 !== "*" && str1 !== "/") {
    respuesta = "La operación matemática que intenta realizar es inexistente";
} else {
    if ((str1 ==='/') && (str3 === 0)) {
        respuesta = "Error - Division por cero";
    } else {
        if ((typeof str2 !== 'number') || (typeof str3 !== 'number')) {
            respuesta = "Valor no valido";
        } else {
            switch (str1) {
                case "+":
                    valor = str2 + str3;
                    break;
                case "-":
                    valor = str2 - str3;
                    break;
                case "*":
                    valor = str2 * str3;
                    break;
                case "/":
                    valor = str2 / str3;
                    break;   
            }
        respuesta = `El resultado es : ${valor}`;  
        }
    }         
}
return respuesta;
}

console.log(`${calculoMatematico('+', 50, 10)}`);




//! =======================================================================================================================================================

/**
 *? EJERCICIO 9: Crear una función que reciba un número como parámetro y, a partir de ahi, ir agregando ese mismo valor y los siguientes a un arreglo hasta que
 *? el número a ser evaluado sea igual al doble de ese número recibido como parámetro
 *? Validar al inicio de la función que el número sea positivo. De lo contrario retornar la frase "El número ingresado debe ser mayor a 0"
 *? Ayuda: usar ciclo while y recordar el método "push" para ir agregando valores al arreglo
 */


 
 arreglo = []

 function cargarArreglo(numero) {
 
 let i = 1
 
 if (numero > 0) {
     while (i <= (numero * 2)) {
         arreglo.push(numero);
         i +=1
     }
     return arreglo; 
 } else {
     console.log("El número ingresado debe ser mayor a 0");
 }
 return arreglo;
 }
 
 console.log(`${cargarArreglo(3)}`);
 
 
 


//! =======================================================================================================================================================

/**
 *? EJERCICIO 10: Crear una función que reciba un arreglo de números como parámetro y calcule cuántos de esos números son divisibles por 5.
 *? La función debe retornar la cantidad de números divisibles por 5.
 *?  Ayuda: Usar el operador módulo (o resto) "%"
 */


contador = 0

function divisiblesPorCinco(numeros) {

for (const i in numeros) {
    const dato = (numeros[i] % 5);
    if (dato  === 0) {
        contador +=1;
    } 
        
    }
return contador;
}

console.log(`El total de números que son divisibles por 5 es: ${divisiblesPorCinco([1,5,10,12,15,17,20,22,33,23])}`);




//! =======================================================================================================================================================

/**
 *? EJERCICIO 11: Crear una función que reciba un arreglo de números y realice la sumatoria de los mismos.
 *? La función debe retornar la sumatoria de esos números.
 *?
 */


suma = 0

function sumatoria(numeros = []) {

for (const i in numeros) {
    suma = suma + numeros[i]
    }
return suma;
}

console.log(`La sumatoria total es: ${sumatoria([2,7,10,115,0])}`);



//! =======================================================================================================================================================

/**
 *? EJERCICIO 12: Crear una función que reciba el "objetoFijo" definido al inicio y verificar si la cantidad total de empleados de E-Contact indicada (100) es igual
 *? a la sumatoria de los empleados de las sedes.
 *? La función debe retornar True si son iguales, o False en caso de no ser iguales
 */
 

 const objetoFijo = {
  empresa: "E-Contact",
  datos: {
    empleados: 100,
    direccion: {
      calle: "Calle Córdoba",
      numero: 476,
      piso: 3,
    },
    sectores: [
      "Contabilidad",
      "Finanzas",
      "Informática",
      "Atención al público",
    ],
    sedes: {
      Chile: { telefono: 56227566262, empleados: 35 },
      Peru: { telefono: 5116358614, empleados: 25 },
      EEUU: { telefono: 17864978777, empleados: 43 },
      Ecuador: { telefono: null, empleados: 19 },
      Colombia: { telefono: 3178952449, empleados: 28 },
    },
  },
};

let suma = 0;
let validador = false;

function verificarCantidadEmpleados(econtact = {}) {

const totalEmpleados = econtact.datos.empleados;

for (const i in econtact.datos.sedes) {
  suma = suma + econtact.datos.sedes[i].empleados;

  } 

if ( totalEmpleados === suma) {
  validador = true
} 
return validador;
}

console.log(`¿Las cantidades son iguales? : ${verificarCantidadEmpleados(objetoFijo,100)}`);



//! =======================================================================================================================================================

/**
 *? EJERCICIO 13: Crear una función que retorne un nuevo arreglo con el cuadrado de cada número del "arregloFijo" definido al inicio
 *? Ayuda: para calcular el cuadrado de un número podemos usar la expresión "**" o la clase "Math" con su método "pow". Ver ejemplos a continuación:
 *? Ejemplo de 3 al cuadrado:
 *? console.log(3 ** 2)
 *? Ejemplo de 5 al cuadrado:
 *? console.log(Math.pow(5, 2))
 */


const arregloCuadrados = []

function calcularCuadrados(arreglo) {

for (const i in arreglo) {
    arregloCuadrados.push(arreglo[i]**2);
    }
return arregloCuadrados;
}

console.log(`Arreglo de cuadrados es: ${calcularCuadrados([2, 3, 4, 7, 12, 18, 20, 26])}`);



//! =======================================================================================================================================================

/**
 *? EJERCICIO 14: Crear una función que reciba como parámetro un arreglo de 6 (seis) números como mínimo y realizar la sumatoria de los mismos.
 *? Si la sumatoria supera un valor de 100 retornar True.
 *? Caso contrario retornar False.
 *? Validar al inicio de la función que el arreglo cuente con la condición establecida. Si no cumple la misma, retornar False
 */



let suma = 0
let resultado = false

function validarArreglo(numeros) {

if (numeros.length >= 6) {
    for (const i in numeros) {
        suma = suma + numeros[i];
        } 
    if (suma > 100) {
        valor = true
    } else {
        valor = false
    }    
} else {
    valor = false
}

return valor;

}

console.log(`La validacion del arreglo es: ${validarArreglo([5,15,58,69,74,99])}`);


//! =======================================================================================================================================================

/**
 *? EJERCICIO 15: Crear una función que reciba dos parámetros: un arreglo de strings con diferentes nombres, y un segundo parámetro con un nombre (string) cualquiera.
 *? La función debe retornar True si en ese arreglo se encuentra el nombre pasado como segundo parámetro. Caso contrario retornar False.
 *? Recordar que Javascript es "Case Sensitive", es decir, distingue entre mayúsculas y minúsculas.
 */

 
let resultado = false

function validarNombre(nombres, nombre) {

for (const i in nombres) {
    if (nombres[i] === nombre) {
       resultado = true 
    } 
} 
return resultado;
}

console.log(`¿El nombre se encuentra en el arreglo?: ${validarNombre(['Jose','Pedro','Carlos','Diego'],'Jose')}`);



//! =======================================================================================================================================================

/**
 *? EJERCICIO 16: Crear una función que reciba 2 (dos) parámetros: un arreglo de números y número. La función debe retornar la posición de ese valor en el arreglo
 */
 
let pos = ""

function devolverPosicion(numeros, numero) {

for (const i in numeros) {
    if (numeros[i] === numero) {
       pos = pos + i + ',';
    } 
} 

if (pos === "") {
    pos = "No encontrado"
} 
return pos;
}

console.log(`El numero se encuentra en la pos: ${devolverPosicion([1,2,3,4,5,3],3)}`);



//! =======================================================================================================================================================

/**
 *? EJERCICIO 17: Crear una función que reciba 2 (dos) parámetros: el "objetoFijo" definido al inicio y un string. Retornar True si el segundo parámetro se encuentra
 *? dentro de los sectores de E-Contact. Caso contrario, retornar False
 */

 const objetoFijo = {
  empresa: "E-Contact",
  datos: {
    empleados: 100,
    direccion: {
      calle: "Calle Córdoba",
      numero: 476,
      piso: 3,
    },
    sectores: [
      "Contabilidad",
      "Finanzas",
      "Informática",
      "Atención al público",
    ],
    sedes: {
      Chile: { telefono: 56227566262, empleados: 35 },
      Peru: { telefono: 5116358614, empleados: 25 },
      EEUU: { telefono: 17864978777, empleados: 43 },
      Ecuador: { telefono: null, empleados: 19 },
      Colombia: { telefono: 3178952449, empleados: 28 },
    },
  },
};

let encontrado = false;

function verificarSector(econtact, sector) {

for (const i in econtact.datos.sectores) {
  if (econtact.datos.sectores[i] === sector) {
     encontrado = true
  } 
} 
return encontrado;
}

console.log(`¿Sector encontrado?: ${verificarSector(objetoFijo,'Informática')}`);

 


//! =======================================================================================================================================================

/**
 *? EJERCICIO 18: Crear una función que reciba 2 (dos) parámetros: el "objetoFijo" definido al inicio y un número (cantidad de empleados).
 *? La función debe retornar la cantidad de sedes que tengan una cantidad de empleados menor a la cantidad establecida como segundo parámetro.
 */


 const objetoFijo = {
  empresa: "E-Contact",
  datos: {
    empleados: 100,
    direccion: {
      calle: "Calle Córdoba",
      numero: 476,
      piso: 3,
    },
    sectores: [
      "Contabilidad",
      "Finanzas",
      "Informática",
      "Atención al público",
    ],
    sedes: {
      Chile: { telefono: 56227566262, empleados: 35 },
      Peru: { telefono: 5116358614, empleados: 25 },
      EEUU: { telefono: 17864978777, empleados: 43 },
      Ecuador: { telefono: null, empleados: 19 },
      Colombia: { telefono: 3178952449, empleados: 28 },
    },
  },
};

let contador = 0;

function verificarCantidadEmpleados(econtact, cantidad) {
  for (const i in econtact.datos.sedes) {
  if (econtact.datos.sedes[i].empleados < cantidad) {
     contador += 1
  } 
} 
return contador;
}

console.log(`La cantidad de sedes es : ${verificarCantidadEmpleados(objetoFijo,30)}`);


//! =======================================================================================================================================================

/**
 *? EJERCICIO 19: Crear una función que reciba 2 (dos) parámetros: un objeto y un string (clave a verificar). Si el objeto cuenta con la clave que se solicita
 *? como segundo parámetro, retornar True. Caso contrario retornar False.
 *? Ejemplo: El siguiente objeto cuenta con las claves nombre, edad y profesion. PERO no cuenta con la clave "altura" por ejemplo.
 *? const alumno = { nombre: 'Juan', edad: 35, profesion: 'programador' }
 *?
 */


const alumno = { nombre: 'Juan', edad: 35, profesion: 'programador', idioma: 'chino' }

let validador = false;

function verificarClave(objeto, clave) {
const claves = Object.keys(objeto);
for (const i in claves) {
   if (claves[i] === clave) {
    validador = true
   } 
} 
return validador;
}

console.log(`La clave a verificar es : ${verificarClave(alumno,'idioma')}`);



//! =======================================================================================================================================================

/**
 *? EJERCICIO 20: Crear una función que reciba un arreglo de numeros reales y retornar un nuevo arreglo con los mismos numeros pero quitando su parte decimal.
 *? Recordatorio: al inicio hay un arreglo de numeros reales como ejemplo.
 */
 

const numerosReales = [34.4552, 25.1543, 17.9438, 90.5, 67.82, 5, 9.99, 62.037];
const numerosEnteros = [];

let validador = false;

function quitarParteDecimal(arregloNumerosReales = []) {

for (const i in arregloNumerosReales) {
   numerosEnteros.push(Math.trunc(arregloNumerosReales[i]));
} 
return numerosEnteros;
}

console.log(`El arreglo con numeros enteros : ${quitarParteDecimal(numerosReales)}`);


