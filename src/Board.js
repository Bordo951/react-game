import React from 'react';
import Square from './Square';
import StoredReactComponent from "./components/StoredReactComponent";
import BoardGenerator from "./BoardGenerator";

class Board extends StoredReactComponent {
    constructor(props) {
        super(props, 'board', {
            level: 3,
            squares: Array(9).fill(null),
            xIsNext: true
        });
        this.boardGenerator = new BoardGenerator();
    }

    handleClick(i) {
        const squares = this.state.squares.slice();

        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        let xIsNext = !this.state.xIsNext;

        this.updateKeyState('squares', squares);
        this.updateKeyState('xIsNext', xIsNext);
        this.setState({
            squares: squares,
            xIsNext: xIsNext
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
        const lines = this.boardGenerator.generateWinnerLines(this.state.level);
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

    refreshBoard() {
        this.removeStateByKey('squares');
        this.state.squares = [];
    }

    render() {
        const winner = this.calculateWinner(this.state.squares);
        let status = winner ? 'Won ' + winner : 'Next move: ' + (this.state.xIsNext ? 'X' : 'O');
        let boardView = <h3 className="status">Are you ready to play the 'Tic-Tac-Toe' game?</h3>;

        if (this.props.isStarted) {
            boardView = <div>
                <h3 className="status">{status}</h3>
                <div className="board">
                    {this.renderBoardRows()}
                </div>
            </div>;
        } else {
            this.refreshBoard();
        }

        return (<div>
                {boardView}
            </div>
        );
    }
}

export default Board;
