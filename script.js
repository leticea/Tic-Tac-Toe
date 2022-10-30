
const ticTacToe = {

    board: ['X','0','','','','','','',''],
    simbols: ['X','O'],
    containerElement: null,

    init: function(container) {

        this.containerElement = container;
    },

    draw: function() {

        let content = '';

        for (i in this.board) {
           
            content += '<div>' + this.board[i] + '</div>';
        }

        this.containerElement.innerHTML = content;
    }
};