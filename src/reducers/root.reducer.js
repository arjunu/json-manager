import {createReducerFromObject} from '../utils/reducerUtils';
import {
    ACTION_INIT_PROJECT_SUCCESS,
    ACTION_ADD_COLLECTION,
    ACTION_ADD_JSON,
    ACTION_LOAD_JSON_FILE_SUCCESS
} from '../constants/actions';
import {fromJS} from 'immutable';

const initialState = fromJS({
    // projectDir: "/Users/rztm838/Documents/Github/json-manager/data",
    collections: {}
});

const reducerFunctions = {
    [ACTION_INIT_PROJECT_SUCCESS]: (state, payload) => state.merge({
        projectDir: payload.projectDir,
        collections: fromJS(payload.collections)
    }),
    [ACTION_ADD_COLLECTION]: (state, payload) => state.setIn(["collections", payload.id], fromJS({
        id: payload.id,
        name: payload.name,
        files: {}
    })),
    [ACTION_ADD_JSON]: (state, payload) => state.setIn(["collections", payload.collectionId, "files", payload.id], fromJS({
        id: payload.id,
        name: payload.name
    })),
    [ACTION_LOAD_JSON_FILE_SUCCESS]: (state, payload) => state.set("openFile", fromJS({
        id: payload.id,
        collectionId: payload.collectionId,
        data: payload.data
    }))
};

const rootReducer = createReducerFromObject(reducerFunctions, initialState);

export default rootReducer;