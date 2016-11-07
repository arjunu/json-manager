import {fromJS} from 'immutable';

export const selectContent = state => {
    const stateRoot = state.root;

    return {
        openFile: stateRoot.get("openFile")
    }
};