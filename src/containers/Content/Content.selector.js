import {fromJS} from 'immutable';

export const selectContent = state => {
    const stateRoot = state.root;

    return {
        openFileData: stateRoot.get("openFile") ? stateRoot.getIn(["openFile", "data"]) : fromJS({})
    }
};