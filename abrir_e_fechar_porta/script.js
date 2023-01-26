let estado = 'fechada';

let divPortaFechada = document.querySelector('#Fechada');
let divPortaAberta = document.querySelector('#Aberta');

let imgFechada = document.querySelector('#Fechada img');
let imgAberta = document.querySelector('#Aberta img');

imgFechada.addEventListener('click', onClick);

let contador = document.querySelector('h2');
let contadorJs = 0;

let data_hora = document.querySelector("h3");
let data_hora_js;

function onClick(event){
    
    let img = event.currentTarget;
    if(estado === 'fechada'){
        imgFechada.removeEventListener('click', onClick);

        divPortaAberta.classList.remove('NaoAparece');
        imgAberta.addEventListener('click', onClick);

        divPortaFechada.classList.add('NaoAparece');

        estado = 'aberta';
    }else{
        imgAberta.removeEventListener('click', onClick);

        divPortaFechada.classList.remove('NaoAparece');
        imgFechada.addEventListener('click', onClick);

        divPortaAberta.classList.add('NaoAparece');

        estado = 'fechada';  
    }
    contadorJs += 1;
    contador.textContent = contadorJs;

    data_hora_js = new Date().toLocaleString();
    data_hora.textContent = data_hora_js;
}