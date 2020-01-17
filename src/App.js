import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import configureStore, { browserHistory } from 'store';
import Home from 'components/Home';
import Category from 'components/Category';

const store = configureStore();

const App = (a) => (
  <Provider store={store}>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <ConnectedRouter history={browserHistory}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/random/:category" component={Category} />
          <Route render={() => (<div>Chuck Norris disse: "Essa página não existe mais."</div>)} />
        </Switch>
      </ConnectedRouter>
    </MuiPickersUtilsProvider>
  </Provider>
);

export default App;
