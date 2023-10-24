//Se crea la variable para almacenar la posicion inicial
let esqueleto = "off";
let esqueletoStop = document.getElementById("esqueletoQuieto");
let botonSonido = new Audio ('../sound/botonbailar.mp3');
let botonAudio = new Audio ('../sound/audio.mp3')

//Se crea la funcion bailar
function bailar(){
    //El esqueleto por defecto esta en OFF al opturar el boton se pone en ON
    if (esqueleto == "off"){
        esqueleto = "on";
        //El classList  con el add es agregar e intercambiar la imgs en un mismo instante y que quede bailando en on
        esqueletoStop.classList.add("on");
        //Traer el sonido con el evento EventListener
        esqueletoStop.addEventListener('click', ()=>{
            botonSonido.play();
        })
        esqueletoStop.addEventListener('click', ()=>{
            botonAudio.play();
        })
        //El console es para verificar el funcionamiento del ciclo
        console.log("On");
    } else {
        esqueleto = "off"
        //En el caso de este classList con el remove es para que lo deje en el movimiento original es decir off
        esqueletoStop.classList.remove("on");
        esqueletoStop.addEventListener('click', ()=>{
            botonAudio.pause();
        })
        console.log("Off");
    }
}