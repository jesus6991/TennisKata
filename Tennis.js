module.exports = class Tennis {
    constructor(playerOneName, playerTwoName) {
        this.playerOneName = playerOneName;
        this.playerTwoName = playerTwoName;
    }
    playerOnePoints = 0;
    playerTwoPoints = 0;
    convertedScore = {
        0: 'love',
        1: 'fifteen',
        2: 'thirty',
        3: 'forty',
    }
    playerOneScoredPoint() {
        this.playerOnePoints++;
    }
    playerTwoScoredPoint() {
        this.playerTwoPoints++;
    }
    score() {
        if (this.isScoreDifferent()) {
            if (this.isGamePoint()) {
                if (this.isScoreAdvantage()) {
                    return this.advantageScore();
                }
                return `${this.findPlayerWithAdvantage()} wins!`
            }
            return this.findScores();
        }
        if (this.isGameDeuce()) {
            return 'deuce';
        }
        return this.equalScores();
    }

    isScoreDifferent() {
        return this.playerOnePoints !== this.playerTwoPoints;
    }

    isGamePoint() {
        return this.playerOnePoints > 3 || this.playerTwoPoints > 3;
    }

    isScoreAdvantage() {
        return Math.abs(this.playerOnePoints - this.playerTwoPoints) === 1;
    }

    advantageScore() {
        return `${this.findPlayerWithAdvantage()} advantage`;
    }

    equalScores() {
        return `${this.convertedScore[this.playerOnePoints]} all`;
    }

    isGameDeuce() {
        return this.playerTwoPoints >= 3;
    }

    findScores() {
        return `${this.convertedScore[this.playerOnePoints]} ${this.convertedScore[this.playerTwoPoints]}`;
    }

    findPlayerWithAdvantage() {
        return this.playerOnePoints > this.playerTwoPoints ? this.playerOneName : this.playerTwoName;
    }
}