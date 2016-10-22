/**
 * Returns a reducer function
 * @param reducerFunctions {object} an object where keys are action types and values are functions
 * @param initialState {*}
 * @returns {function(*=, {type: *, payload: *}): *}
 */
export const createReducerFromObject = (reducerFunctions, initialState) => {
    if(!reducerFunctions.default)
        reducerFunctions.default = state => state;

    return (state, {type, payload}) => (reducerFunctions[type] || reducerFunctions["default"])(state || initialState, payload);
};
