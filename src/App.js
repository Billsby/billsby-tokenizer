import React from 'react'
import '../src/styles/main.scss';
import {HashRouter, Route, Switch} from 'react-router-dom';

import Header from '../src/component/Header'
import Index from '../src/pages/index'

function App() {
  return (
    <HashRouter basename="/">
      <div className="App">
        <Header />

        <Switch>
          <Route path="/" exact component={Index} />
        </Switch>

      </div>
    </HashRouter>
  );
}

export default App;
