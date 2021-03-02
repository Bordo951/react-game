import React from 'react';
import Board from '../Board';

class Game extends React.Component {
    render() {
        return (
            <div>
                <div className="game">
                    <div className="game-board">
                        <Board />
                    </div>
                    <button className="game__reset-btn">New game</button>
                </div>
            </div>
        );
    }
}

export default Game;
