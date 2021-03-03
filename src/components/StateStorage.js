export default class StateStorage {
    /**
     * Gets the state from the local storage or returns the initial.
     *
     * @param {String} key
     * @param {Object} initialState
     * @return {Object}
     */
    get(key, initialState = null) {
        return {...initialState, ...JSON.parse(window.localStorage.getItem(key))} || {};
    }

    /**
     * Gets value from local storage by key.
     *
     * @param {String} key
     * @return {Object}
     */
    getStateValueByKey(key) {
        return JSON.parse(window.localStorage.getItem(key));
    }

    /**
     * Updates state in storage by key.
     *
     * @param {String} stateKey
     * @param {String} targetKey
     * @param {Object} targetState
     */
    updateStateInStorageByKey(stateKey, targetKey, targetState) {
        let currentState = this.get(stateKey);
        currentState[targetKey] = targetState;
        this.update(stateKey, currentState)
    }

    /**
     * Gets stored state value by key.
     *
     * @param {String} targetState
     * @param {String} key
     * @return {Object}
     */
    getStoredValueByKey(targetState, key) {
        let state = this.getStateValueByKey(targetState);

        return state[key];
    }

    /**
     * Updates the local storage key with targetState object.
     *
     * @param {String} key
     * @param {Object} targetState
     */
    update(key, targetState) {
        window.localStorage.setItem(key, JSON.stringify(targetState));
    }

    /**
     * Removes data from the local storage by key.
     *
     * @param {String} key
     */
    clear(key) {
        window.localStorage.removeItem(key);
    }
}