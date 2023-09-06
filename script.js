var pedra = document.getElementById('pedra');
var papel = document.getElementById('papel');
var tesoura = document.getElementById('tesoura');
const selecionar = document.querySelectorAll('.card');
var valor = '';
var refresh = document.querySelector('.refresh');
var pontospc = 0;
var pontosplayer = 0;

document.getElementById('placar-jogador').innerText = pontosplayer
document.getElementById('placar-pc').innerText = pontospc

pedra.addEventListener('click', function() {
    valor = 0;
    if(valor >= 0) {jogar()}
})

papel.addEventListener('click', function() {
    valor = 1;
    if(valor >= 0) {jogar()}
})

tesoura.addEventListener('click', function() {
    valor = 2;
    if(valor >= 0) {jogar()}
})

function jogar() {
    var player = document.getElementById('player')
    var pc = document.getElementById('pc')

    player.style.display = 'block';

    if(valor == 0){
        player.src = "img/pedra.svg"
    }

    else if(valor == 1){
        player.src = "img/papel.svg"
    }

    else if(valor == 2){
        player.src = "img/tesoura.svg"
    }

    var sorteio = Math.floor(Math.random() * 3);

    setTimeout(function() {

        switch(sorteio) {
            case 0:
               pc.style.display = 'block';
               pc.src = "img/pedra.svg";
               break;
            case 1:
               pc.style.display = 'block';
               pc.src = "img/papel.svg";
               break;
            case 2:
               pc.style.display = 'block';
               pc.src = "img/tesoura.svg";
               break;
        }
    }, 200)

    if(valor == sorteio) {
        document.getElementById('tela-final').src = "img/empate.svg"
    }

    else if(valor == 0 && sorteio == 2 || valor == 1 && sorteio == 0 || valor == 2 && sorteio == 1) {
        document.getElementById('tela-final').src = "img/vitoria.svg";
        pontosplayer = (pontosplayer + 1);
        document.getElementById('placar-jogador').innerText = pontosplayer
    }

    else if(valor == 0 && sorteio == 1 || valor == 1 && sorteio == 2 || valor == 2 && sorteio == 0) {
        document.getElementById('tela-final').src = "img/derrota.svg";
        pontospc = (pontospc + 1);
        document.getElementById('placar-pc').innerText = pontospc
    }

    setTimeout(function() {

    document.querySelector('.result').style.zIndex = "1";    
    document.querySelector('.result').style.opacity = '100%';
    document.querySelector('.result').style.transition = "opacity 1s";
    document.getElementById('tela-final').style.transform = "scale(1.5)";
    document.getElementById('tela-final').style.transition = "scale 3s";
    document.querySelector('.refresh').style.opacity = '100%';
    document.querySelector('.refresh').style.transition = "opacity 2s";

    }, 800)

}

refresh.addEventListener('click', function(){

    valor = ''

    document.querySelector('.result').style.zIndex = "-5";    
    document.querySelector('.result').style.opacity = '0%';
    document.getElementById('tela-final').style.transform = "scale(0)";
    document.querySelector('.refresh').style.opacity = '0%';

    player.style.display = 'none';
    pc.style.display = 'none';

})
