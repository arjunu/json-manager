import {combineReducers} from 'redux';
import rootReducer from './root.reducer';

export default function createReducer() {
    const appReducer = combineReducers({
        root: rootReducer
    });

    return (state, action) => {
        return appReducer(state, action);
    };

};
