import StateStorage from "./StateStorage";

export default class AudioPlayer {
    constructor() {
        this.stateStorage = new StateStorage();
    }

    playSound(name) {
        if(!this.stateStorage.getStoredValueByKey('board','soundsDisabled')) {
            let sound = new Audio(`sounds/${name}.mp3`);
            let volume = this.stateStorage.getStoredValueByKey('board','soundsVolume');
            sound.volume = volume;
            sound.autoplay = true;
        }
    }
}