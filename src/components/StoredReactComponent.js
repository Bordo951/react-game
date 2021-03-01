import React from "react";
import StateStorage from "./StateStorage";

export default class StoredReactComponent extends React.Component {
    constructor(props, stateKey, initialState) {
        super(props);
        this.stateStorage = new StateStorage();
        this.stateKey = stateKey;
        this.setInitialState(initialState);
    }

    /**
     * Sets the initial state to React.Component by getting the state by key
     * from the local storage or setting the default initial state.
     *
     * @param {object} initialState
     */
    setInitialState(initialState) {
        this.state = this.stateStorage.get(this.stateKey, initialState);
    }

    /**
     * Updates the React.Component state and save state to the storage by key.
     *
     * @param {object} targetState
     */
    updateState(targetState) {
        this.setState(targetState, () => {
            this.stateStorage.update(this.stateKey, targetState)
        });
    }
}