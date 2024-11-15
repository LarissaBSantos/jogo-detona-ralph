const state = {
    views: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        time: document.querySelector("#time"),
        score: document.querySelector("#score")
    },
    values: {
        timeId: 0,
        gameVelocity: 800,
        hitPosition: 0,
        result: 0,
        currentTime: 10
    },
    actions: {
        currentTimeDown: setInterval(currentTimeDown, 1000)
    }
};

//Funcao que controla o tempo de jogo
function currentTimeDown(){

    state.values.currentTime--;
    state.views.time.textContent = state.values.currentTime;

    if(state.values.currentTime <= 0){
        clearInterval(state.actions.currentTimeDown);
        clearInterval(randomSquare, state.values.gameVelocity);
        //Mensagem Final
        alert("FIM DE JOGO!\nSUA PONTUAÇÃO: " + state.values.result);
    }
}

//Funcao que sortea em qual quadrado aparecera o inimigo
function randomSquare(){
    //Limpando todos os quadrados
    state.views.squares.forEach((square) => {
        square.classList.remove("enemy");
    }); 

    //Sortendo um numero aleatorio
    let randomNumber = Math.floor((Math.random() * 9));
    let randomSquare = state.views.squares[randomNumber];

    //Atribuir a classe enemy para o numero sorteado
    randomSquare.classList.add("enemy");
    //Identificar o id do quadrado onde está a classe enemy
    state.values.hitPosition = randomSquare.id;
}

//Funcao que muda o quadrado em que aparece o inimigo
function moveEnemy(){
    setInterval(randomSquare, state.values.gameVelocity);
}

//Funcao que verifica se o jogador clicou no quadrado correspondente ao inimigo, 
//adiciona mais um a cada acerto e mostra na tela o score
function addListenerHitBox(){
    state.views.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if(square.id === state.values.hitPosition){
                state.values.result++;
                state.views.score.textContent = state.values.result;
                playAudio("hit.m4a");
            }
        });
    });
}

//Funcao que adiciona um som
function playAudio(audioName){
    let audio = new Audio(`./src/audios/${audioName}`);
    audio.volume = 0.1;
    audio.play();
}

//Funcao que inicializa o jogo
function init(){
    moveEnemy();
    addListenerHitBox();
}
init();