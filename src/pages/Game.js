import React from 'react';
import Board from '../Board'
import { Button } from '@material-ui/core';

class Game extends React.Component {
    render() {
        return (
            <div>
                {/*<h2>Game</h2>*/}
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
