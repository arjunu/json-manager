import {createReducerFromObject} from '../utils/reducerUtils';
import {ACTION_INIT_PROJECT_SUCCESS} from '../constants/actions';
import {fromJS} from 'immutable';

const initialState = fromJS({
    projectDir: "/Users/rztm838/Documents/Github/json-manager/data",
    collections: {}
});

const reducerFunctions = {
    [ACTION_INIT_PROJECT_SUCCESS]: (state, payload) => state.set("projectDir", payload.projectDir)
};

const rootReducer = createReducerFromObject(reducerFunctions, initialState);

export default rootReducer;