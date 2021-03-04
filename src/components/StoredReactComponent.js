import React from "react";
import StateStorage from "./StateStorage";
import AudioPlayer from "./AudioPlayer";

export default class StoredReactComponent extends React.Component {
    constructor(props, stateKey, initialState) {
        super(props);
        this.stateStorage = new StateStorage();
        this.audioPlayer = new AudioPlayer();
        this.stateKey = stateKey;
        this.setInitialState(initialState);
    }

    /**
     * Sets the initial state to React.Component by getting the state by key
     * from the local storage or setting the default initial state.
     *
     * @param {Object} initialState
     */
    setInitialState(initialState) {
        this.state = this.stateStorage.get(this.stateKey, initialState);
    }

    /**
     * Updates the React.Component state and save state to the storage.
     *
     * @param {Object} targetState
     */
    updateState(targetState) {
        this.setState(targetState, () => {
            this.stateStorage.update(this.stateKey, targetState)
        });
    }

    /**
     * Updates the React.Component state by key and save state to the storage by key.
     *
     * @param {String} targetKey
     * @param {Object} targetState
     */
    updateKeyState(targetKey, targetState) {
        this.setState({targetKey: targetState}, () => {
            let currentState = this.stateStorage.get(this.stateKey);
            currentState[targetKey] = targetState;
            this.stateStorage.update(this.stateKey, currentState)
        });
    }

    /**
     * Removes the React.Component state by key.
     *
     * @param {String} targetKey
     */
    removeStateByKey(targetKey) {
        let currentState = this.stateStorage.get(this.stateKey);
            delete currentState[targetKey];
        this.stateStorage.update(this.stateKey, currentState);
    }

    /**
     * Gets the stored state by key.
     *
     * @param {String} targetKey
     * @param {Object} defaultState
     */
    getStateByKey(targetKey, defaultState = null) {
        let currentState = this.stateStorage.get(this.stateKey);
        return currentState[targetKey] ?? defaultState;
    }
}