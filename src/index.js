import * as React from "react";
import 'babel-polyfill';
import {Provider} from 'react-redux';
import {render} from "react-dom";
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './containers/App/App';
import configureStore from './configureStore';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

export const store = configureStore();

render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App label="Default"/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);
