import React from 'react';
import Board from '../Board';
import StoredReactComponent from "../components/StoredReactComponent";

class Game extends StoredReactComponent {
    constructor(props) {
        super(props, 'board', {
            level: 3,
            isStarted: false
        });

        this.startGame = this.startGame.bind(this);
        this.gameOver = this.gameOver.bind(this);
        this.saveGame = this.saveGame.bind(this);
    }

    startGame() {
        let level = this.state.level;
        let mode = this.stateStorage.getStoredValueByKey('board', 'mode');

        this.updateKeyState('isStarted', true);
        this.updateKeyState('squares', Array(level * level).fill(null));
        this.setState({
            isStarted: true
        });
        this.audioPlayer.playSound('start-game');

        if (mode === "autoplay") {
            window.autoplayInterval = setInterval(function () {
                window.autoplay.autoplay();
            }, 600);
        }
    }

    gameOver() {
        this.updateKeyState('isStarted', false);
        this.setState({
            isStarted: false
        });
        this.audioPlayer.playSound('game-over');
        this.stateStorage.updateStateInStorageByKey(this.stateKey,'winner', null);
        this.stateStorage.updateStateInStorageByKey(this.stateKey,'isWinner', false);

        clearInterval(window.autoplayInterval);
    }

    saveGame() {
        this.updateKeyState('isStarted', false);
        this.setState({
            isStarted: false
        });
    }

    render() {

        let actionButtons;

        if (this.state.isStarted) {
            actionButtons = <div className="game-actions">
                <button className="game__reset-btn" onClick={this.gameOver}>Game over</button>
                <button className="game__reset-btn" onClick={this.saveGame}>Save game</button>
            </div>
        } else {
            actionButtons = <div className="game-actions">
                <button className="game__reset-btn" onClick={this.startGame}>Start game</button>
                <button className="game__reset-btn">Load game</button>
            </div>
        }

        return (
            <div>
                <div className="game">
                    <div className="game-board">
                        <Board isStarted={this.state.isStarted} level={this.state.level}/>
                    </div>
                    {actionButtons}
                </div>
            </div>
        );
    }
}

export default Game;
