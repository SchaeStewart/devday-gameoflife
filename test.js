const expect = require('chai').expect;
const { countLivingNeighbors, isAlive, gameOfLife } = require('./index');
describe('Game of life', () => {
    describe('countLivingNeighbors', () => {
        const game = [
            [0, 1, 0],
            [0, 1, 0],
            [0, 1, 0]
        ]
        it('It should return the number of living neighbors', () => {
            expect(countLivingNeighbors(1, 1, game)).to.equal(2)
        });
        it('It should return the number of living neighbors', () => {
            expect(countLivingNeighbors(1, 2, game)).to.equal(1)
        });
        it('It should return the number of living neighbors', () => {
            expect(countLivingNeighbors(2, 2, game)).to.equal(2)
        });
    })

    describe('isAlive', () => {
        const game = [
            [0, 0, 1],
            [0, 1, 0],
            [1, 0, 0]
        ]
        it('A live cell with fewer than two live neighbors dies', () => {
            expect(isAlive(0, 2, game)).to.be.equal(0)
        })
        it('A live cell with two or three live neighbors lives', () => {
            expect(isAlive(1, 1, game)).to.be.equal(1)
        })
        it('A live cell with more than three live neighbors dies', () => {
            const game = [
                [0, 0, 1],
                [0, 1, 1],
                [1, 0, 1]
            ]
            expect(isAlive(1, 1, game)).to.be.equal(0)
        })
        it('A dead cell with three live neighbors becomes a live', () => {
            const game = [
                [0, 0, 1],
                [0, 0, 1],
                [1, 0, 0]
            ]
            expect(isAlive(1, 1, game)).to.be.equal(1)
        })
    })

    describe('gameOfLife', () => {
        const game = [
            [0, 0, 1],
            [0, 0, 1],
            [1, 0, 0]
        ]
        const gameAfterOneIteration = [ // I think
            [0, 1, 1],
            [1, 0, 1],
            [0, 0, 0]
        ]
        it('Should loop through the board and call isAlive and update the board with the result for each cell', () => {
            gameOfLife(game)
            expect(game).to.deep.equal(gameAfterOneIteration)
        })
    })
})