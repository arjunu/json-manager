import {call, put, fork, take, cancel} from 'redux-saga/effects';
import {ACTION_INIT_PROJECT, ACTION_INIT_PROJECT_SUCCESS} from '../constants/actions';
import jsonfile from 'jsonfile';
const fs = require('fs');

/**
 * Makes GET request
 * @returns {*}
 */
export function* initProject(action) {
    const {path} = action.payload;
    try {
        const data = jsonfile.readFileSync(path + "/manager.json");
        yield put({type: ACTION_INIT_PROJECT_SUCCESS, payload: {projectDir: path, collections: data.collections}});
    }
    catch (error) {
        console.error(error);
    }
}

/**
 * watches for ACTION_INIT_PROJECT and calls initProject
 */
export function* initProjectWatcher() {
    //noinspection InfiniteLoopJS
    while (true) {
        const action = yield take(ACTION_INIT_PROJECT);
        yield call(initProject, action);
    }
}

/**
 * Manages watcher lifecycle
 */
export default function* initProjectSaga() {
    // Fork watcher so we can continue execution
    yield fork(initProjectWatcher);
}