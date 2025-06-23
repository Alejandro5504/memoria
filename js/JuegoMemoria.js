const CANTIDADPALABRAS = (document.getElementById("cantidadPalabras"));
const PALABRAS = (document.getElementById("palabras"));
const RESPUESTA = (document.getElementById("respuesta"));

const palabras = ['pucha', 'grapar', 'parrac', 'clapa', 'atzucac', 'garfar', 'aixopluc', 'tovatarda', 'espurnejar', 'batifull', 'revetlla', 'xafogor', 'esbargir-se', 'chimuelo', 'neno', 'nemo', 'profesor', 'libro', 'whap', 'lectura', ]
const secuencia = [];

let cantidad;
let tArray = palabras.length;

function escogerPalabras() {

    PALABRAS.innerHTML = "";

    cantidad = parseInt(CANTIDADPALABRAS.value);

    for (let i = 0; i < cantidad; i++) {

        let nRandom = Math.floor(Math.random() * tArray);
        secuencia.push(palabras[nRandom]);

        let valor = document.createElement("span");
        valor.innerHTML = palabras[nRandom];
        PALABRAS.appendChild(valor);

        setTimeout(() => {

            PALABRAS.style.display = "none";
            mostrarUsuario();

        }, 4000);

    }

}

function mostrarUsuario() {

    const respuestaDiv = document.getElementById("respuesta");
    respuestaDiv.innerHTML = "";

    for (let i = 0; i < cantidad; i++) {
        let input = document.createElement("input");
        input.type = "text";
        input.id = "num" + i;
        respuestaDiv.appendChild(input);
    }

    document.getElementById("comprobar").disabled = false;

}

function comprobar() {
  const inputs = document.querySelectorAll("#respuesta input");
  let aciertos = 0;

  for (let i = 0; i < cantidad; i++) {
    const entrada = document.getElementById("num" + i).value.trim().toLowerCase();
    if (entrada === secuencia[i].toLowerCase()) {
      aciertos++;
    }
  }

  document.getElementById("resultado").innerText = `Aciertos: ${aciertos} de ${secuencia.length}`;

  const palabrasDiv = document.getElementById("palabras");
  if (palabrasDiv) {
    palabrasDiv.style.display = "block";
  }

  document.getElementById("comprobar").disabled = true;
  document.getElementById("reiniciar").disabled = false;
}


    function nuevoJuego() {
      secuencia.length = 0; // vacía el array
      cantidad=0;
      document.getElementById("palabras").innerHTML = '';
      document.getElementById("palabras").style.display='block';
      document.getElementById("respuesta").innerHTML = '';
      document.getElementById("resultado").innerText = '';
      document.getElementById("comprobar").disabled = true;
    }
