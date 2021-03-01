export default class StateStorage {
    /**
     * Gets the state from the local storage or returns the initial.
     *
     * @param {string} key
     * @param {object} initialState
     */
    get(key, initialState) {
        return JSON.parse(window.localStorage.getItem(key)) || initialState || {};
    }

    /**
     * Updates the local storage key with targetState object.
     *
     * @param {string} key
     * @param {object} targetState
     */
    update(key, targetState) {
        window.localStorage.setItem(key, JSON.stringify(targetState));
    }

    /**
     * Removes data from the local storage by key.
     *
     * @param {string} key
     */
    clear(key) {
        window.localStorage.removeItem(key);
    }
}