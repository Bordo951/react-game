import React from 'react';
import Square from './Square';
import StoredReactComponent from "./components/StoredReactComponent";
import BoardGenerator from "./BoardGenerator";

class Board extends StoredReactComponent {
    constructor(props) {
        super(props, 'board', {
            level: 3,
            squares: Array(9).fill(null),
            xIsNext: true,
        });
        this.boardGenerator = new BoardGenerator();
    }

    handleClick(i) {
        const squares = this.state.squares.slice();

        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';

        this.updateState({
            level: this.state.level,
            squares: squares,
            xIsNext: !this.state.xIsNext,
        });
    }

    renderSquare(i, index) {
        return <Square
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
            key={index}
        />;
    }

    renderBoardRows() {
        let squaresRows = this.boardGenerator.generateSquaresRows(this.state.level);

        return squaresRows.map((squaresRow, rowIndex) => {
            let listItem = squaresRow.map((square, squareIndex) =>
                this.renderSquare(square, squareIndex)
            );

            return <div className="board-row" key={rowIndex}>
                {listItem}
            </div>;
        });
    }

    calculateWinner(squares) {
        const lines = this.boardGenerator.generateWinnerLines(this.state.size);
        let firstEqual;
        let isWinner;

        for (let i = 0; i < lines.length; i++) {
            const lineIndexes = lines[i];
            firstEqual = squares[lineIndexes[0]];
            isWinner = true;
            lineIndexes.forEach(function (lineIndex) {
                let nextEqual = squares[lineIndex];
                if (nextEqual !== firstEqual) {
                    isWinner = false;
                }
            });

            if (isWinner) {
                return firstEqual;
            }
        }

        return null;
    }

    render() {
        const winner = this.calculateWinner(this.state.squares);
        let status = winner ? 'Выиграл ' + winner : 'Следующий ход: ' + (this.state.xIsNext ? 'X' : 'O');

        return (
            <div>
                <h3 className="status">{status}</h3>
                <div className="board">
                    {this.renderBoardRows()}
                </div>
            </div>
        );
    }
}

export default Board;
