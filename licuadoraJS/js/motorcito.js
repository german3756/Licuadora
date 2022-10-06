var estadoLicuadora = "apagada";
var sonidoLicuadora = document.getElementById("blender-sound");
var botonLicuadora = document.getElementById("blender-button-sound");
var licuadora = document.getElementById("blender");



function controlarLicuadora() {
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendido";
        licuadora.classList.add("active");
        console.log("me prendiste");
    } else {
        estadoLicuadora = "apagada"
        licuadora.classList.remove("active");
        console.log("me apagaste");
    }
}

function hacerBrrBrr(){
    if( sonidoLicuadora.paused ) {
        botonLicuadora.play();
        sonidoLicuadora.play();
        } else {
        botonLicuadora.play();
        sonidoLicuadora.paused();
        sonidoLicuadora.currentime = 0;
        }
}