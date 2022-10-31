
const ticTacToe = {

    board: ['','','','','','','','',''],
    simbols: { 
        options: ['X','O'],
        turnIndex: 0, //quem é o jogador da vez
        change() {

            this.turnIndex = (this.turnIndex === 0 ? 1 : 0); //faz a troca do jogador
        }
    },
    containerElement: null,
    gameover: false,
    winningSequences: [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ],

    init(container) {

        this.containerElement = container;
    },

    makePlay(position) {

        if (this.gameover) return false;
        if (this.board[position] === '') {

            this.board[position] = this.simbols.options [this.simbols.turnIndex]; //insere no board e associa o simbolo ao jogador da vez
            
            this.draw();
            let winningSequencesIndex = this.checkWinningSequences(this.simbols.options[this.simbols.turnIndex]);

            if (winningSequencesIndex >= 0 || !this.isGameOver()) {

                this.gameIsOver();

            } else {

                this.simbols.change();
            }

            return true;

        } else {

            return false;
        }
    },

    gameIsOver() {

        this.gameover = true;
        console.log("GAME OVER");
    },

    isGameOver() {
        return this.board.includes('');
    },

    start() {

        this.board.fill('');
        this.draw();
        this.gameover = false;
    },

    restart() {
        if (this.isGameOver() || this.gameover) {
            this.start();
            console.log('this game has been restarted!')
        } else if (confirm('Are you sure you want to restart this game?')) {
            this.start();
            console.log('this game has been restarted!')
        }
    },

    checkWinningSequences(simbol) {

        for (i in this.winningSequences) {

            if (this.board[this.winningSequences[i][0]] == simbol &&
                this.board[this.winningSequences[i][1]] == simbol &&
                this.board[this.winningSequences[i][2]] == simbol) {

                    console.log('Sequencia vencedora: ' + i);
                    return i;
            }
        }

        return -1;
    },

    draw() {

        this.containerElement.innerHTML = this.board.map((element, index) =>
            `<div onclick="ticTacToe.makePlay('${index}')"> ${element} </div>`)
            .reduce((content, current) => content + current);
    }
}