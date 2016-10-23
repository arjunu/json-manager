import {call, put, fork, take, cancel} from 'redux-saga/effects';
import {ACTION_LOAD_JSON_FILE, ACTION_LOAD_JSON_FILE_SUCCESS} from '../constants/actions';
import jsonfile from 'jsonfile';
const fs = require('fs');

/**
 * Makes GET request
 * @returns {*}
 */
export function* openJSONFile(action) {
    const {projectDir, collectionId, id} = action.payload;
    try {
        const data = jsonfile.readFileSync(`${projectDir}/${collectionId}/${id}.json`);
        yield put({type: ACTION_LOAD_JSON_FILE_SUCCESS, payload: {collectionId, id, data}});
    }
    catch (error) {
        console.error(error);
    }
}

/**
 * watches for ACTION_INIT_PROJECT and calls initProject
 */
export function* openJSONFileWatcher() {
    //noinspection InfiniteLoopJS
    while (true) {
        const action = yield take(ACTION_LOAD_JSON_FILE);
        yield call(openJSONFile, action);
    }
}

/**
 * Manages watcher lifecycle
 */
export default function* openJSONFileSaga() {
    // Fork watcher so we can continue execution
    yield fork(openJSONFileWatcher);
}