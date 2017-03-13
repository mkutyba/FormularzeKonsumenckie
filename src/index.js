import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './modules/App';
import Home from './modules/Home';
import Forms from './modules/Forms';
import Form from './modules/Form';
import Lawsuits from './modules/Lawsuits';
import Lawsuit from './modules/Lawsuit';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render((
    <MuiThemeProvider>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="/forms" component={Forms}>
                    <Route path="/forms/:formName" component={Form}/>
                </Route>
                <Route path="/lawsuits" component={Lawsuits}>
                    <Route path="/lawsuits/:lawsuitName" component={Lawsuit}/>
                </Route>
            </Route>
        </Router>
    </MuiThemeProvider>
), document.getElementById('root'));
