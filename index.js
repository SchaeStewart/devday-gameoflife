const lodash = require("lodash")

const gameOfLife = (board) => {
    let newBoard = lodash.cloneDeep(board)

    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[y].length; x++) {
            newBoard[y][x] = isAlive(x, y, board)
        }
    }
    return newBoard
}

const getCell = (x, y, board) => board[y] && board[y][x]
    ? board[y][x]
    : 0

const countLivingNeighbors = (x, y, board) => {
    let neighborsAlive = 0;
    if (getCell(x - 1, y, board) === 1) {
        neighborsAlive++
    }
    if (getCell(x - 1, y + 1, board) === 1) {
        neighborsAlive++
    }
    if (getCell(x + 1, y + 1, board) === 1) {
        neighborsAlive++
    }
    if (getCell(x, y + 1, board) === 1) {
        neighborsAlive++
    }
    if (getCell(x + 1, y, board) === 1) {
        neighborsAlive++
    }
    if (getCell(x + 1, y - 1, board) === 1) {
        neighborsAlive++
    }
    if (getCell(x, y - 1, board) === 1) {
        neighborsAlive++
    }
    if (getCell(x - 1, y - 1, board) === 1) {
        neighborsAlive++
    }

    return neighborsAlive
}

const isAlive = (x, y, board) => {
    const livingNeighbors = countLivingNeighbors(x, y, board);
    if (getCell(x, y, board) === 0 && livingNeighbors === 3) {
        return 1;
    }
    if (getCell(x, y, board) === 0) {
        return 0;
    }
    if (livingNeighbors < 2) {
        return 0;
    }
    if (livingNeighbors === 2 || livingNeighbors === 3) {
        return 1;
    }
    if (livingNeighbors > 3) {
        return 0;
    }
}

module.exports = {
    countLivingNeighbors,
    isAlive,
    getCell,
    gameOfLife
}


const game = () => {
    const board = [
        [0, 1, 1, 0, 1],
        [1, 0, 1, 0, 0],
        [1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1],
        [0, 1, 0, 0, 0]
    ]
    while(!board.every(row => row.every(cell => cell === 0))) {
        gameOfLife(board)
        console.log(board)
    }
}

game()