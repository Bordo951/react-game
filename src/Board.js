import React from 'react';
import Square from './Square';
import StoredReactComponent from "./components/StoredReactComponent";
import BoardGenerator from "./BoardGenerator";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class Board extends StoredReactComponent {
    constructor(props) {
        super(props, 'board', {
            size: 3,
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
            size: this.state.size,
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

    setBoardSize(option) {
        this.setState({
            size: option.value
        });
    }

    renderBoardRows() {
        let squaresRows = this.boardGenerator.generateSquaresRows(this.state.size);

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
        const options = [
            {value: '3', label: '3x3'},
            {value: '5', label: '5x5'},
            {value: '7', label: '7x7'},
            {value: '9', label: '9x9'},
            {value: '11', label: '11x11'}
        ];
        const winner = this.calculateWinner(this.state.squares);
        let status = winner ? 'Выиграл ' + winner : 'Следующий ход: ' + (this.state.xIsNext ? 'X' : 'O');

        return (
            <div>
                <h3 className="status">{status}</h3>
                <div className="board-settings">
                    <Dropdown options={options} onChange={this.setBoardSize.bind(this)}
                              placeholder="Select a board size"/>
                </div>
                <div className="board">
                    {this.renderBoardRows()}
                </div>
            </div>
        );
    }
}

export default Board;
