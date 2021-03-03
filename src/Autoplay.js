import StateStorage from "./components/StateStorage";

export default class Autoplay {
    constructor() {
        this.stateStorage = new StateStorage()
    }

    autoplay() {
        let squares = this.stateStorage.getStoredValueByKey('board', 'squares');
        let isWinner = this.stateStorage.getStoredValueByKey('board', 'isWinner');
        let isStepsAvailable = false;
        let firstIndex = 0;
        let lastIndex = squares.length - 1;
        let randIndex = this.getRandomIntInclusive(firstIndex, lastIndex);


        for (let i = 0; i < squares.length; i++) {
            if (squares[i] === null && !isWinner) {
                isStepsAvailable = true;
                break;
            }
        }

        while (isStepsAvailable && squares[randIndex] !== null) {
            randIndex = this.getRandomIntInclusive(firstIndex, lastIndex);
        }

        if (randIndex) {
            document.querySelector("[data-square='" + randIndex + "']").click();
        }

        randIndex = null;
    }

    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
    }
}