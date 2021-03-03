import React from 'react';
import StoredReactComponent from "../components/StoredReactComponent";

class Settings extends StoredReactComponent {
    constructor(props) {
        super(props, 'board', {
            mode: "players",
            theme: "classic",
            level: "3",
            soundsDisabled: false,
            musicDisabled: false
        });

        this.onChangeTheme = this.onChangeTheme.bind(this);
        this.onChangeMode = this.onChangeMode.bind(this);
        this.onChangeLevel = this.onChangeLevel.bind(this);
        this.onChangeSounds = this.onChangeSounds.bind(this);
        this.onChangeMusic = this.onChangeMusic.bind(this);
    }

    onChangeSounds(event) {
        this.updateKeyState('soundsDisabled', event.target.checked);
        this.setState({
            soundsDisabled: event.target.checked
        });
    }

    onChangeMusic(event) {
        this.updateKeyState('musicDisabled', event.target.checked);
        this.setState({
            musicDisabled: event.target.checked
        });
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
                    <div className="settings__item-wrapper_long">
                        <h4 className="settings__item-title_long">Whose move is the first?</h4>
                        <input className="radio-btn" type="radio" id="move-1" name="move" value="X"/>
                        <label htmlFor="move-1">Cross</label>
                        <input className="radio-btn" type="radio" id="move-2" name="move" value="O"/>
                        <label htmlFor="move-2">Zero</label>
                    </div>
                    <div className="settings__item-wrapper">
                        <h3 className="settings__item-title">Game Sounds</h3>
                        <div className="sounds__wrapper">
                            <div className="sounds__title">Sounds</div>
                            {/*From https://codepen.io/aaroniker/pen/zYYKxey*/}
                            <div>
                                <label className="volume">
                                    <input type="checkbox" name="sounds-disabled" checked={this.state.soundsDisabled} onChange={this.onChangeSounds} />
                                        <svg viewBox="0 0 108 96">
                                            <path d="M7,28 L35,28 L35,28 L59,8 L59,88 L35,68 L7,68 C4.790861,68 3,66.209139 3,64 L3,32 C3,29.790861 4.790861,28 7,28 Z"></path>
                                            <path d="M79,62 C83,57.3333333 85,52.6666667 85,48 C85,43.3333333 83,38.6666667 79,34 L49,3"></path>
                                            <path d="M95,69 C101.666667,61.6666667 105,54.3333333 105,47 C105,39.6666667 101.666667,32.3333333 95,25 L75.5,6 L49,33"></path>
                                        </svg>
                                </label>
                            </div>
                            <div>
                                <input className="volume-toggle" type="range" id="sounds-volume" name="sounds-volume" min="0" max="11"/>
                                <label className="volume-name" htmlFor="volume">Volume</label>
                            </div>
                        </div>
                        <div className="sounds__wrapper">
                            <div className="sounds__title">Music</div>
                            {/*From https://codepen.io/aaroniker/pen/zYYKxey*/}
                            <div>
                                <label className="volume">
                                    <input type="checkbox" name="music-disabled" checked={this.state.musicDisabled} onChange={this.onChangeMusic}/>
                                    <svg viewBox="0 0 108 96">
                                        <path d="M7,28 L35,28 L35,28 L59,8 L59,88 L35,68 L7,68 C4.790861,68 3,66.209139 3,64 L3,32 C3,29.790861 4.790861,28 7,28 Z"></path>
                                        <path d="M79,62 C83,57.3333333 85,52.6666667 85,48 C85,43.3333333 83,38.6666667 79,34 L49,3"></path>
                                        <path d="M95,69 C101.666667,61.6666667 105,54.3333333 105,47 C105,39.6666667 101.666667,32.3333333 95,25 L75.5,6 L49,33"></path>
                                    </svg>
                                </label>
                            </div>
                            <div>
                                <input className="volume-toggle" type="range" id="music-volume" name="music-volume" min="0" max="11"/>
                                <label className="volume-name" htmlFor="volume">Volume</label>
                            </div>
                        </div>
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
