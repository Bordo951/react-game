import React from 'react';
import Square from './Square';
import StoredReactComponent from "./components/StoredReactComponent";
import BoardGenerator from "./BoardGenerator";

class Board extends StoredReactComponent {
    constructor(props) {
        super(props, 'board', {
            level: 3,
            squares: Array(9).fill(null),
            xIsNext: "true",
            isWinner: false,
            winner: null
        });
        this.boardGenerator = new BoardGenerator();
    }

    handleClick(event, i) {
        if (this.state.isWinner) {
            this.audioPlayer.playSound('mimo');
        } else {
            this.audioPlayer.playSound('click');
        }

        const squares = this.state.squares.slice();

        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext === "true" ? 'X' : 'O';
        this.state.xIsNext = this.state.xIsNext === "true" ? "false" : "true";

        let xIsNext = this.state.xIsNext;

        this.stateStorage.updateStateInStorageByKey(this.stateKey, 'squares', squares);
        this.stateStorage.updateStateInStorageByKey(this.stateKey, 'xIsNext', xIsNext);
        this.setState({
            squares: squares,
            xIsNext: xIsNext
        });

        this.state.winner = this.calculateWinner(squares);
        this.stateStorage.updateStateInStorageByKey(this.stateKey, 'winner', this.state.winner);

        if (this.state.winner) {
            this.state.isWinner = true;
            this.stateStorage.updateStateInStorageByKey(this.stateKey, 'isWinner', this.state.isWinner);
            this.audioPlayer.playSound('congratulations');
            clearInterval(window.autoplayInterval);
        }

        let mode = this.stateStorage.getStoredValueByKey('board', 'mode');
        if (mode === "intellect" && !this.state.isWinner) {
            if (event.isTrusted) {
                setTimeout(function () {
                    window.autoplay.autoplay()
                }, 600);
            }
        }
    }

    renderSquare(i, index) {
        let value;
        let themeCrossClassName = 'chips-cross__' + this.getStateByKey('theme', 'classic');
        let themeZeroClassName = 'chips-zero__' + this.getStateByKey('theme', 'classic');

        if (this.state.squares[i] === 'X') {
            value = <div className={themeCrossClassName}></div>;
        }

        if (this.state.squares[i] === 'O') {
            value = <div className={themeZeroClassName}></div>;
        }

        return <Square
            value={value}
            onClick={(event) => this.handleClick(event, i)}
            key={index}
            index={i}
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
        let blankValues = Array(this.state.level * this.state.level).fill(null);
        this.stateStorage.updateStateInStorageByKey(this.stateKey, 'squares', blankValues);
        this.state.squares = blankValues;
        this.state.isWinner = false;
        this.state.winner = null;
        this.state.xIsNext = this.stateStorage.getStoredValueByKey('board', 'xIsFirst');
    }

    render() {
        let boardView = <h3 className="status">Are you ready to play the 'Tic-Tac-Toe' game?</h3>;
        let status = this.state.isWinner ? 'Won ' + this.state.winner : 'Next move: ' + (this.state.xIsNext === "true" ? 'X' : 'O');
        let boardCompletedClass = this.state.isWinner ? 'board won' : 'board';

        if (this.props.isStarted) {
            boardView = <div>
                <h3 className="status">{status}</h3>
                <div className={boardCompletedClass}>
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
