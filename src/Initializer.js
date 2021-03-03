import StateStorage from "./components/StateStorage";

export default class Initializer {
    constructor() {
        this.stateStorage = new StateStorage();
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
        musicVolume: "0.5"
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
    }
}