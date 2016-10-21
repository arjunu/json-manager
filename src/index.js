import * as React from "react";
import {render} from "react-dom";
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './containers/App/App';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

render(
    <MuiThemeProvider>
        <App label="Default" />
    </MuiThemeProvider>,
    document.getElementById('root')
);
