import React from 'react';

class Settings extends React.Component {
    render() {
        return (
            <div className="settings">
                <h2 className="settings__title">Make your choice...</h2>
                <div className="settings__container">
                    <div className="settings__item-wrapper">
                        <h3 className="settings__item-title">Game Sounds</h3>
                    </div>
                    <div className="settings__item-wrapper">
                        <h3 className="settings__item-title">Game Mode</h3>
                        <div className="radio">
                            <input className="radio-btn" type="radio" id="variant-1" name="players" value="player"/>
                            <label htmlFor="variant-1">1 player</label>
                        </div>
                        <div className="radio">
                            <input className="radio-btn" type="radio" id="variant-2" name="players" value="players"/>
                            <label htmlFor="variant-2">2 players</label>
                        </div>
                        <div className="radio">
                            <input className="radio-btn" type="radio" id="variant-3" name="players" value="autoplay"/>
                            <label htmlFor="variant-3">Autoplay</label>
                        </div>
                    </div>
                    <div className="settings__item-wrapper">
                        <h3 className="settings__item-title">Chips style</h3>
                        <div className="radio">
                            <input className="radio-btn" type="radio" id="theme-1" name="theme" value="tic-tac-toe"/>
                            <label htmlFor="theme-1">Сlassic: X vs O</label>
                        </div>
                        <div className="radio">
                            <input className="radio-btn" type="radio" id="theme-2" name="theme" value="players"/>
                            <label htmlFor="theme-2">Sushi: rolls vs sashimi</label>
                        </div>
                        <div className="radio">
                            <input className="radio-btn" type="radio" id="theme-3" name="theme" value="matrix"/>
                            <label htmlFor="theme-3">The Matrix: your choice, Neo: red or blue?</label>
                        </div>
                    </div>
                    <div className="settings__item-wrapper">
                        <h3 className="settings__item-title">Levels</h3>
                        <div className="radio">
                            <input className="radio-btn" type="radio" id="level-1" name="level" value="3-3"/>
                            <label htmlFor="level-1">3 x 3</label>
                        </div>
                        <div className="radio">
                            <input className="radio-btn" type="radio" id="level-2" name="level" value="5-5"/>
                            <label htmlFor="level-2">5 x 5</label>
                        </div>
                        <div className="radio">
                            <input className="radio-btn" type="radio" id="theme-3" name="level" value="7-7"/>
                            <label htmlFor="level-3">7 x 7</label>
                        </div>
                        <div className="radio">
                            <input className="radio-btn" type="radio" id="level-4" name="level" value="9-9"/>
                            <label htmlFor="level-4">9 x 9</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Settings;
