var Tennis = require('./Tennis.js');
let tennis;
describe('Tennis Game Kata', () => {
    beforeEach(() => {
        tennis = new Tennis('player 1', 'player 2');
    })
    test('love all', () => {
        expectedScore('love all');
    })
    test('fifteen love', () => {
        playerOneScores(1);
        expectedScore('fifteen love');
    })
    test('thirty love', () => {
        playerOneScores(2);
        expectedScore('thirty love');
    })
    test('forty love', () => {
        playerOneScores(3);
        expectedScore('forty love');
    })
    test('love fifteen', () => {
        playerTwoScores(1);
        expectedScore('love fifteen');
    })
    test('love thirty', () => {
        playerTwoScores(2);
        expectedScore('love thirty');
    })
    test('love forty', () => {
        playerTwoScores(3);
        expectedScore('love forty');
    })
    test('fifteen all', () => {
        playerOneScores(1);
        playerTwoScores(1);
        expectedScore('fifteen all');
    })
    test('thiry all', () => {
        playerOneScores(2);
        playerTwoScores(2);
        expectedScore('thirty all');
    })
    test('deuce', () => {
        gameIsDeuce();
        expectedScore('deuce');
    })
    test('player 1 advantage', () => {
        gameIsDeuce();
        playerOneScores(1)
        expectedScore('player 1 advantage');
    })
    test('player 2 advantage', () => {
        gameIsDeuce();
        playerTwoScores(1)
        expectedScore('player 2 advantage');
    })
    test('player 1 wins!', () => {
        gameIsDeuce();
        playerOneScores(2)
        expectedScore('player 1 wins!');
    })
    test('player 2 wins!', () => {
        gameIsDeuce();
        playerTwoScores(2)
        expectedScore('player 2 wins!');
    })
});

function gameIsDeuce() {
    playerOneScores(3);
    playerTwoScores(3);
}

function playerOneScores(numberOfPoints) {
    for (let i = 0; i < numberOfPoints; i++) {
        tennis.playerOneScoredPoint();
    }
}
function playerTwoScores(numberOfPoints) {
    for (let i = 0; i < numberOfPoints; i++) {
        tennis.playerTwoScoredPoint();
    }
}

function expectedScore(expected) {
    expect(tennis.score()).toBe(expected);
}