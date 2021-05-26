//11- Lanzamiento de dados

//función para crear el número aleatorio y redondearlo
function aleatorio(minimo, maximo) {
    return Math.round(Math.random() * (maximo - minimo) + minimo);
}

//declaración de la array
let tiradas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

//bucle donde hacer 36.000 tiradas y guardaras en un array
for (let index = 0; index < 36000; index++) {

    //declaración de los dados y la suma dentro del bucle para que se actualicen
    let dado1 = aleatorio(1, 6);
    let dado2 = aleatorio(1, 6);
    let suma = dado1 + dado2;

    //vamos sumando la cantidad de veces que se repite una posición(suma) quitando 0 y 1 
    tiradas[suma - 2]++;
}

//visualización del array final
for (let index2 = 0; index2 < tiradas.length; index2++) {
    console.log("Ha salido el número " + (index2 + 2) + " repetido " + tiradas[index2] + " veces.");
}

//12-Expresiones regulares
//12.1 Formato fecha
let contenido = 'Nací el 05/04/1982 en Donostia.';
let fecha = [];

console.log('');
console.log('Verfificación de fecha:');

//función que guarda el fragmento del texto que contiene una fecha y verifica los valores
function validarFecha(valor) {

    //bucle para recoger la fecha dntro del string
    for (let index = 0; index < contenido.length; index++) {
        if (contenido.charAt(index) >= 0 && contenido.charAt(index) <= 9 && contenido.charAt(index) != ' ') {
            fecha.push(contenido.substring(index, index + 10));
            break;
        }
    }

    //verifica la fecha recogida
    if (/^\d{1,2}\/\d{1,2}\/\d{2,4}$/.test(fecha)) {
        console.log('La fecha ' + fecha + ' tiene un formato correcto.');
    } else {
        console.log('La fecha és incorrecta.');
    }
}

//llamada de la función
validarFecha(contenido);

//12.2 Direccióm email

let email = 'aziz.r8@hotmail.com';

//expresion regular
function validarEmail(valor) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(valor)) {
        console.log(("La dirección de email " + valor + " es correcta."));
    } else {
        console.log(("La dirección de email es incorrecta."));
    }
}

//llamada de la función
console.log('');
validarEmail(email);

//12.4 Invertir un nombre
let cadena = 'John Smith';
let cadenaT = [];

console.log('');
console.log(cadena + ' invertido sería: ');

function invertirNombre(cadena) {

    for (let index = 0; index < cadena.length; index++) {

        //recorro la cadena hasta encontrar un espacio
        if (cadena.charAt(index) == ' ') {

            //guarda en una posición de mi array lo que va antes y después del espacio
            cadenaT.push(cadena.substring(0, index));
            cadenaT.push(cadena.substring(index + 1, cadena.length));
        }

    }
    console.log(cadenaT[1] + ", " + cadenaT[0]);
}

//llamada de la función
invertirNombre(cadena);

//12.5 Borrar contenido de la etiqueta script
let htmlScript = 'En este html <script> hay un script que contiene esto </script> debe quedar vacío.'
let codigoScript = [0];

//busco la posición del principio y final del script y declaro un texto vacio para insertar
let startIndex = htmlScript.indexOf('<script>');
let endIndex = htmlScript.lastIndexOf('</script>');
let vacio = ' ';

//función que reemplaza el fragmento de codigo por un espacio vacío
function replaceBetween(htmlScript, startIndex, endIndex, vacio) {
    return htmlScript.substring(0, startIndex) + vacio + origin.substring(endIndex);
    console.log(htmlScript);
}

//llamada de la función
replaceBetween(htmlScript, startIndex, endIndex, vacio);

//codio comentado donde guardo el script en un array
/*
function eliminarScript(htmlScript) {
    for (let index = 0; index < htmlScript.length; index++) {
        if (htmlScript.charAt(index) == '<') {
            if (htmlScript.charAt(index + 1) == 's' && htmlScript.charAt(index + 2) == 'c' &&
                htmlScript.charAt(index + 3) == 'r' && htmlScript.charAt(index + 4) == 'i') {
                for (let index2 = index; index2 < htmlScript.length; index2++) {
                    if (htmlScript.charAt(index2) == '<') {
                        if (htmlScript.charAt(index2 + 1) == '/' && htmlScript.charAt(index2 + 2) == 's' &&
                            htmlScript.charAt(index2 + 3) == 'c' && htmlScript.charAt(index2 + 4) == 'r') {
                            codigoScript.push(htmlScript.substring(index, index2 + 9))
                            htmlScript.replace(codigoScript, ' ');
                        }

                    }
                }
            }
        }
    }
    console.log(htmlScript);
}

eliminarScript(htmlScript);
*/

//13- onClick

function parrafo() {
    alert('Se presionó un párrafo del documento');
}

function parrafoTabla2() {
    alert('Se presionó un párrafo contenido e la segunda tabla');
}

//15- Visor de imágenes

function ampliarImagen(nImagen) {

    //ponemos enel cuadro principal la imagen con el numero pasado por parámetro
    document.images['principal'].src = 'img/foto' + nImagen + '.jpg';

    //cambaimos el texto por el alt de la imagen
    pie.innerHTML = document.images['img' + nImagen].alt;
}

//16- reloj
//función principal del reloj
function relojDigital() {

    //sacamos los datos de cada parte de la fecha del sistema
    var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();

    //añadimos el 0 si hace falta en si el valor sólo tiene un digito
    hora = añadir0(hora);
    minutos = añadir0(minutos);
    segundos = añadir0(segundos);

    //mostramos el reloj 
    document.getElementById("reloj").innerHTML = hora + " : " + minutos + " : " + segundos;

    //actualizamos el reloj cada segundo
    setTimeout(function() { relojDigital() }, 1000);
}

//función para añadir un 0 a la hora
function añadir0(valor) {
    if (valor < 10) {
        valor = "0" + valor;
    }
    return valor;
}