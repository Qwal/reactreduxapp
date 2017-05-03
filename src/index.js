import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { Route, HashRouter } from 'react-router-dom';
// TapEventPlugin for Material Ui
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin();

//Material Ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Tabs, Tab} from 'material-ui/Tabs';

import TaskManager from './components/TaskManager/index';
import About from './components/About/index';
import Menu from './components/Menu';
import './index.css';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <MuiThemeProvider>
        <div>
          {/*Navigation throu routing*/}
          {/*<Menu/>
          <Route exact path="/" component={TaskManager}/>
          <Route path="/about" component={About}/>*/}

          {/*Or navigation throu MaterialUI tabs*/}
          <div className="Tabs-container">
            <Tabs>
              <Tab label="Task manager" >
                <TaskManager/>
              </Tab>
              <Tab label="About" >
                <About/>
              </Tab>
            </Tabs>
          </div>
        </div>
      </MuiThemeProvider>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);