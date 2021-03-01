import React from 'react';
import Board from '../Board'

class Game extends React.Component {
    render() {
        return (
            <div>
                <h2>Game</h2>
                <div className="game">
                    <div className="game-board">
                        <Board />
                    </div>
                </div>
            </div>
        );
    }
}

export default Game;
