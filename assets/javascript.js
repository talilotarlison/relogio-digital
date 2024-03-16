// Pegando data atual do sistema 
var horaAtual = new Date;
var hora = horaAtual.getHours();
var minutos = horaAtual.getMinutes();
var segundos = horaAtual.getSeconds();

//console.log(segundos);

// função que mostra na tela da primeira maneira 

function horasShow1() {
    var horaShow = document.getElementById("show-hora");

    // console.log(horaShow);

    const createH1 = document.createElement("h1");

    var text = `${hora}:${minutos}:${segundos}  Hrs`;

    const newtext = document.createTextNode(text);

    createH1.appendChild(newtext);

    horaShow.appendChild(createH1);

}

// função que mostra na tela da segunda maneira 


var horaShow = document.getElementById("show-hora");

//console.log(horaShow);

const createH1 = document.createElement("h1");

createH1.id = 'horas';

// var text = `${hora}:${minutos}:${segundos}  Hrs`;

//const newtext = document.createTextNode(text);

var text = "00:00:00 Hrs"

createH1.innerText = text;

horaShow.appendChild(createH1);


setInterval(function horasShow2() {
    // Pegando data atual do sistema 
    var horaAtual = new Date;
    var hora = horaAtual.getHours();
    var minutos = horaAtual.getMinutes();
    var segundos = horaAtual.getSeconds();

    //console.log(segundos);


    var horaShow = document.getElementById("horas");
    horaShow.textContent = `${hora}:${minutos}:${segundos}  Hrs`;

    //mostra data atualizada

    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const data = today.toLocaleDateString()

    var horaData = document.getElementById("data");
    horaData.textContent = data;

}, 1000);