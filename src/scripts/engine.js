const state = {
    views: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        time: document.querySelector("#time"),
        score: document.querySelector("#score")
    },
    values: {
        timeId: 0,
        gameVelocity: 800
    }
};

//Funcao que sortea em qual quadrado aparecera o inimigo
function randomSquare(){
    //Limpando todos os quadrados
    state.views.squares.forEach((square) => {
        square.classList.remove("enemy");
    }); 

    //Sortendo um numero aleatorio
    let radonNumber = Math.floor((Math.random() * 9));
    let radonSquare = state.views.squares[radonNumber];

    //Atribuir a classe enemy para o numero sorteado
    radonSquare.classList.add("enemy");
}

//Funcao que muda o quadrado em que aparece o inimigo
function moveEnemy(){
    setInterval(randomSquare, state.values.gameVelocity);
}

function addListenerHitBox(){
    state.views.squares.forEach((square) => {});
    if(square.id == (state.views.enemy.id)){}
}

function init(){
    moveEnemy();
}
init();