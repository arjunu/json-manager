import {call, put, fork, take, cancel} from 'redux-saga/effects';
import {ACTION_INIT_PROJECT, ACTION_INIT_PROJECT_SUCCESS} from '../constants/actions';
const fs = require('fs');

/**
 * Makes GET request
 * @returns {*}
 */
export function* initProject(action) {
    const {path} = action.payload;
    try {
        fs.writeFile(path + '/manager.json', JSON.stringify({}), 'utf8');
        yield put({type: ACTION_INIT_PROJECT_SUCCESS, payload: {projectDir: path}});
    } catch (error) {
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
    const watcher = yield fork(initProjectWatcher);
}