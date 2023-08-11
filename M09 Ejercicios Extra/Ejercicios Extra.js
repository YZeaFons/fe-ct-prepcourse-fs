/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var arrDeArr = [];
   for (var prop in objeto) {
      arrDeArr.push([prop, objeto[prop]]);
   }
   return arrDeArr;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var array = string.split('');
   var objetFinal = {};
   array = array.sort();

   for (var i = 0; i < array.length; i++) {
      conteo = 0;
      if (objetFinal.hasOwnProperty(array[i]) === false) {
         for (var j = 0; j < array.length; j++) {
            if (array[i] === array[j]) {
               conteo = conteo + 1;
            }
         }
         objetFinal[array[i]] = conteo;
      }
   }
   return objetFinal;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var array = [];
   function esMay(letra) {
      return letra === letra.toUpperCase();
   }

   for (i = 0; i < string.length; i++) {
      if (esMay(string.charAt(i)) === true) {
         array.push(string.charAt(i));
      }
   }

   for (i = 0; i < string.length; i++) {
      if (esMay(string.charAt(i)) === false) {
         array.push(string.charAt(i));
      }
   }
   string = array.join('');
   return string;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var array = frase.split(' ');
   var reversed = [];
   var arrayTemporal = [];
   var reversedTemporal = '';
   for (var i = 0; i < array.length; i++) {
      arrayTemporal = array[i].split('');
      arrayTemporal = arrayTemporal.reverse();
      reversedTemporal = arrayTemporal.join('');
      reversed.push(reversedTemporal);
   }
   return reversed.join(' ');
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var val1 = numero.toString();
   val1 = val1.split('');
   val1 = val1.reverse();
   val1 = val1.join('');
   var val2 = numero.toString();
   if (val1 === val2) {
      return 'Es capicua';
   } else {
      return 'No es capicua';
   }

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var array = string.split('');
   var newArray = [];
   for (var i = 0; i < array.length; i++) {
      if (array[i] != 'a' && array[i] != 'b' && array[i] != 'c') {
         newArray.push(array[i]);
      }
   }
   string = newArray.join('');
   return string;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var array1 = arrayOfStrings;
   var nuevoarray = [];


   while (array1.length > 0) {
      var valorArray = 0;
      for (j = 0; j < array1.length; j++) {
         if (array1[j].length < array1[valorArray].length) {
            valorArray = j;
         }
      }
      nuevoarray.push(array1[valorArray]);
      array1.splice(valorArray, 1);
   }
   return nuevoarray;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var nuevoArr = [];

   for (i = 0; i < array1.length; i++) {
      if (nuevoArr.indexOf(i) === -1) {
         for (j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
               nuevoArr.push(array1[i]);
            }
         }
      }
   }
   return nuevoArr;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
