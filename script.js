let order = []
let clickedOrder = []
let score = 0

//o - verde
//1 = vermelho
//2 = amarelo
//3 - azul

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')

//cria ordem aleatoria de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4)
    order[order.length] = colorOrder
    clickedOrder = []

    for(let i in order){
        let elementColor = createColorElement(order[i])
        lightColor(elementColor, Number(i) + 1)
    }
}

//acende a proxíma cor 
let lightColor = (element, number) => {
    number = number * 500
    setTimeout(() => {
        element.classList.add('selected')
    }, number - 250)

    setTimeout(() => {
        element.classList.remove('selected')
    })
}

//checa se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () =>{
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            gameOver()
            break
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Pontução: ${score}\nVocê acertou! Iniciando o proxímo nivel`)
        nextLevel()
    }
}

//função para o click do usuário
let click = (color) =>{
    clickedOrder[clickedOrder.length] = color
    createColorElement(color).classList.add('selected')

    setTimeout(() => {
        createColorElement(color).classList.remove('selected')
        checkOrder()
        
    }, 250)

    
}

//função que retorna a cor
let createColorElement = (color) => {
    if(color == 0){
        return green
    }else if(color == 1){
        return red
    }else if(color == 2){
        return yellow
    }else if(color == 3){
        return blue
    }
}

//função para proxímo nivel do jogo
let nextLevel = () => {
    score++
    shuffleOrder();
}

//função para gamer over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocê perdeu o jogo!\nClique em OK para Iniciar um novo jogo.`)
    order = []
    clickedOrder = []

    playGamer()
}

//função para começar o jogo | um novo jogo

let playGamer = () => {
    alert('Bem vindo ao Gênesis! Inicando o novo jogo!!')
    score = 0
    nextLevel()
}

/*green.addEventListener('click', click(0))
red.addEventListener('click', click(1))
yellow.addEventListener('click', click(2))
blue.addEventListener('click', click(3))*/

green.onclick = () => click(0)
red.onclick = () => click(1)
yellow.onclick = () => click(2)
blue.onclick = () => click(3)

playGamer()