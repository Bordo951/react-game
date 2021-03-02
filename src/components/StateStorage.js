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