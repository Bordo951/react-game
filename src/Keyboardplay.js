import StateStorage from "./components/StateStorage";

export default class Keyboardplay {
    constructor() {
        this.stateStorage = new StateStorage();
    }

    activeSquareIndex = 0;

    initKeyboard(event) {
        let e = event || window.event;

        if (e.keyCode === 13) {
            // space button
            this.resetButton();
        } else if (e.keyCode === 32) {
            // space button
            this.addChip();
        } else if (e.keyCode === 38) {
            // up arrow
            this.moveUp();
        } else if (e.keyCode === 40) {
            // down arrow
            this.moveDown();
        } else if (e.keyCode === 37) {
            // left arrow
            this.moveLeft();
        } else if (e.keyCode === 39) {
            // right arrow
            this.moveRight();
        }
    }

    preventScrolling(event) {
        let e = event || window.event;

        if ([13, 32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }

    addChip() {
        document.querySelector("[data-square='" + this.activeSquareIndex + "']").click();
    }

    resetButton() {
        document.querySelector(".game__reset-btn").click();
    }

    clearActiveTab() {
        let squareTab = document.querySelector('.square-tab');

        if (squareTab) {
            squareTab.classList.remove('square-tab');
        }
    }

    updateActiveTab() {
        let squareTab = document.querySelector("[data-square='" + this.activeSquareIndex + "']");

        if (squareTab) {
            this.clearActiveTab();
            squareTab.classList.add('square-tab');
        }
    }

    moveLeft() {
        if (this.activeSquareIndex > 0) {
            this.activeSquareIndex--;
        }

        this.updateActiveTab();
    }

    moveRight() {
        let level = +this.stateStorage.getStoredValueByKey('board', 'level');

        if (this.activeSquareIndex < level * level - 1) {
            this.activeSquareIndex++;
        }

        this.updateActiveTab();
    }

    moveUp() {
        let level = +this.stateStorage.getStoredValueByKey('board', 'level');

        if (this.activeSquareIndex > 0) {
            this.activeSquareIndex -= level;
        }

        this.updateActiveTab();
    }

    moveDown() {
        let level = +this.stateStorage.getStoredValueByKey('board', 'level');

        if (this.activeSquareIndex < level * level - 1) {
            this.activeSquareIndex += level;
        }

        this.updateActiveTab();
    }
}