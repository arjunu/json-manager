import {createStore, applyMiddleware, compose} from 'redux';
import createSagaMiddleware from 'redux-saga';
import createReducer from './reducers/createReducer';
import sagas from './sagas';
import {fromJS} from 'immutable';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {

    const composeEnhancers =
        process.env.NODE_ENV !== 'production' &&
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
            window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                // shouldHotReload: false
            }) : compose;

    const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

    const store = createStore(createReducer(), {}, enhancer);

    sagas.forEach(saga => sagaMiddleware.run(saga));

    return store;
}