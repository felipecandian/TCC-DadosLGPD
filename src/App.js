import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';
import Main from './modules/Main';
import stores from './stores';

function App() {
  return (
    <Provider store={stores}>
      <BrowserRouter>
        <Switch>
          <Route exact path={["/", "/quiz", "/mentoring", "/streaming"]} component={Main} />
          <Route path="*" component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;