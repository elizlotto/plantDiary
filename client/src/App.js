import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../components/Login';
import PlantContainer from '../components/PlantContainer';
import './assets/styles.scss';

const App = () => {
  return (
    <main>
      <router>
        <Switch>
          <Route path="/loggedIn" component={PlantContainer} />
          <Route path="/" component={Login} exact />
        </Switch>
      </router>
    </main>
  );
};

export default App;
