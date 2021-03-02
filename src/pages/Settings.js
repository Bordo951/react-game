import React from 'react';
import StoredReactComponent from "../components/StoredReactComponent";

class Settings extends StoredReactComponent {
    constructor(props) {
        super(props, 'board', {
            mode: "players",
            theme: "classic",
            level: "3"
        });

        this.onChangeTheme = this.onChangeTheme.bind(this);
        this.onChangeMode = this.onChangeMode.bind(this);
        this.onChangeLevel = this.onChangeLevel.bind(this);
    }

    onChangeTheme(event) {
        this.updateKeyState('theme', event.target.value);
        this.setState({
            theme: event.target.value
        });
    }

    onChangeMode(event) {
        this.updateKeyState('mode', event.target.value);
        this.setState({
            mode: event.target.value
        });
    }

    onChangeLevel(event) {
        this.updateKeyState('level', event.target.value);
        this.setState({
            level: event.target.value
        });
    }

    render() {
        return (
            <div className="settings">
                <h2 className="settings__title">Make your choice...</h2>
                <div className="settings__container">
                    <div className="settings__item-wrapper">
                        <h3 className="settings__item-title">Game Sounds</h3>
                        <div></div>
                        <div></div>
                    </div>
                    <div className="settings__item-wrapper">
                        <h3 className="settings__item-title">Game Mode</h3>
                        <div className="radio">
                            <input className="radio-btn" type="radio" id="variant-1" name="mode" value="intellect"
                                   checked={this.state.mode === "intellect"} onChange={this.onChangeMode}/>
                            <label htmlFor="variant-1">Intellectual opponent</label>
                        </div>
                        <div className="radio">
                            <input className="radio-btn" type="radio" id="variant-2" name="mode" value="players"
                                   checked={this.state.mode === "players"} onChange={this.onChangeMode}/>
                            <label htmlFor="variant-2">2 players</label>
                        </div>
                        <div className="radio">
                            <input className="radio-btn" type="radio" id="variant-3" name="mode" value="autoplay"
                                   checked={this.state.mode === "autoplay"} onChange={this.onChangeMode}/>
                            <label htmlFor="variant-3">Autoplay</label>
                        </div>
                    </div>
                    <div className="settings__item-wrapper">
                        <h3 className="settings__item-title">Chips style</h3>
                        <div className="radio">
                            <input className="radio-btn" type="radio" id="theme-1" name="theme" value="classic"
                                   checked={this.state.theme === "classic"} onChange={this.onChangeTheme}/>
                            <label htmlFor="theme-1">Сlassic: X vs O</label>
                        </div>
                        <div className="radio">
                            <input className="radio-btn" type="radio" id="theme-2" name="theme" value="sushi"
                                   checked={this.state.theme === "sushi"} onChange={this.onChangeTheme}/>
                            <label htmlFor="theme-2">Sushi: rolls vs nigiri</label>
                        </div>
                        <div className="radio">
                            <input className="radio-btn" type="radio" id="theme-3" name="theme" value="matrix"
                                   checked={this.state.theme === "matrix"} onChange={this.onChangeTheme}/>
                            <label htmlFor="theme-3">The Matrix: your choice, Neo: red or blue?</label>
                        </div>
                    </div>
                    <div className="settings__item-wrapper">
                        <h3 className="settings__item-title">Levels</h3>
                        <div className="radio">
                            <input className="radio-btn" type="radio" id="level-1" name="level" value="3"
                                   checked={this.state.level === "3"} onChange={this.onChangeLevel}/>
                            <label htmlFor="level-1">3 x 3</label>
                        </div>
                        <div className="radio">
                            <input className="radio-btn" type="radio" id="level-2" name="level" value="5"
                                   checked={this.state.level === "5"} onChange={this.onChangeLevel}/>
                            <label htmlFor="level-2">5 x 5</label>
                        </div>
                        <div className="radio">
                            <input className="radio-btn" type="radio" id="level-3" name="level" value="7"
                                   checked={this.state.level === "7"} onChange={this.onChangeLevel}/>
                            <label htmlFor="level-3">7 x 7</label>
                        </div>
                        <div className="radio">
                            <input className="radio-btn" type="radio" id="level-4" name="level" value="9"
                                   checked={this.state.level === "9"} onChange={this.onChangeLevel}/>
                            <label htmlFor="level-4">9 x 9</label>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Settings;
