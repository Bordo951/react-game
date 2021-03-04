import StateStorage from "./components/StateStorage";
import Autoplay from "./Autoplay";
import Keyboardplay from "./Keyboardplay";

export default class Initializer {
    constructor() {
        this.stateStorage = new StateStorage();
        this.keyBoardplay = new Keyboardplay();
    }

    initState = {
        mode: "players",
        theme: "classic",
        isStarted: false,
        level: "3",
        squares: Array(9).fill(null),
        xIsFirst: "true",
        soundsDisabled: false,
        soundsVolume: "0.7",
        musicDisabled: false,
        musicVolume: "0.5",
        isWinner: false,
        winner: null
    };

    initApp() {
        let board = window.localStorage.getItem('board');

        if (!board) {
            window.localStorage.setItem('board', JSON.stringify(this.initState));
        }

        if (!window.mainSound) {
            let sound = new Audio(`sounds/main.mp3`);

            sound.loop = true;
            sound.volume = +this.stateStorage.getStoredValueByKey('board', 'musicVolume');

            if (!this.stateStorage.getStoredValueByKey('board', 'musicDisabled')) {
                sound.autoplay = true;
                sound.play();
            }

            window.mainSound = sound;
        }

        window.autoplay = new Autoplay();


        document.onkeydown = this.keyBoardplay.initKeyboard.bind(this.keyBoardplay);
        window.addEventListener("keydown", this.keyBoardplay.preventScrolling, false);
    }
}