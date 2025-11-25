let square = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: ''
}
let player = ''
let warning = ''
let playing = true
let gameMode = 'human' // 'human' or 'cpu'
let cpu = '' // 'x' or 'o' when playing vs cpu

document.querySelector('.reset').addEventListener('click', reset)
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', itemClick)
})

// Controls
const modeSelect = document.getElementById('mode')
const starterSelect = document.getElementById('starter')

if(modeSelect) modeSelect.addEventListener('change', (e) => {
    gameMode = e.target.value
    reset()
})

if(starterSelect) starterSelect.addEventListener('change', (e) => {
    // on change, just reset to apply selection
    reset()
})

function itemClick(event) {
    let item = event.target.getAttribute('data-item')
    if(playing && square[item] === '') {
        square[item] = player
        renderSquare()
        togglePlayer()
        // se após o toggle for a vez do CPU, joga
        if(playing && gameMode === 'cpu' && player === cpu) {
            setTimeout(cpuMove, 400)
        }
    }
}

function reset() {
    warning = ''

    // definir quem inicia: selecionar do controle ou aleatório
    let starter = 'random'
    if(starterSelect) starter = starterSelect.value

    if(starter === 'random') {
        let random = Math.floor(Math.random() * 2)
        player = (random === 0) ? 'x' : 'o'
    } else {
        player = starter
    }

    // definir modo de jogo e cpu
    if(modeSelect) gameMode = modeSelect.value
    if(gameMode === 'cpu') {
        // o jogador humano será sempre o oposto de quem o CPU usa
        cpu = (player === 'x') ? 'o' : 'x'
    } else {
        cpu = ''
    }

    for(let i in square) {
        square[i] = ''
    }

    playing = true
    
    renderSquare()
    renderInfo()

    // se o CPU inicia, ele deve fazer o primeiro movimento
    if(playing && gameMode === 'cpu' && player === cpu) {
        setTimeout(cpuMove, 400)
    }
}

function renderSquare() {
    for(let i in square) {
        let item = document.querySelector(`div[data-item=${i}]`)
        item.innerHTML = square[i]
    }

    checkGame()
}

function renderInfo() {
    document.querySelector('.vez').innerHTML = player
    document.querySelector('.resultado').innerHTML = warning

}

function togglePlayer() {
    player = (player === 'x') ? 'o' : 'x'
    renderInfo()
}

function emptySquares() {
    return Object.keys(square).filter(k => square[k] === '')
}

function cpuMove() {
    if(!playing) return
    if(gameMode !== 'cpu') return
    if(!cpu) return
    if(player !== cpu) return

    let empties = emptySquares()
    if(empties.length === 0) return

    // tenta ganhar
    for(let i=0;i<empties.length;i++) {
        let key = empties[i]
        square[key] = cpu
        if(checkWinnerFor(cpu)) {
            renderSquare()
            // não togglear aqui — renderSquare chama checkGame
            togglePlayer()
            return
        }
        square[key] = ''
    }

    // tenta bloquear
    let opponent = cpu === 'x' ? 'o' : 'x'
    for(let i=0;i<empties.length;i++) {
        let key = empties[i]
        square[key] = opponent
        if(checkWinnerFor(opponent)) {
            // bloquear colocando cpu aqui
            square[key] = cpu
            renderSquare()
            togglePlayer()
            return
        }
        square[key] = ''
    }

    // senão escolhe aleatório
    let choice = empties[Math.floor(Math.random()*empties.length)]
    square[choice] = cpu
    renderSquare()
    togglePlayer()
}

function checkGame() {
    if(checkWinnerFor('x')) {
        warning = 'O "x" venceu'
        playing = false
    } else if(checkWinnerFor('o')) {
        warning = 'O "o" ganhou'
        playing = false
    } else if(isFull()) {
        warning = 'Deu empate'
        playing = false
    } 
}

function checkWinnerFor(player) {
    let pos = [
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',
        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',
        'a1,b2,c3',
        'a3,b2,c1'
    ]

    for(let w in pos) {
        let pArray = pos[w].split(',')
        let hasWon = pArray.every(opition => square[opition] === player)
        if(hasWon) {
            return true
        }
    }

    return false
}

function isFull() {
    for(let i in square) {
        if(square[i] === ''){
            return false
        }
    }
    return true
}










