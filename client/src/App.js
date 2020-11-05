import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import Login from '../components/Login';
import PlantContainer from '../components/PlantContainer';
import './assets/styles.scss';
//note must result webpack does not have style loader etc 

const App = () => {
  return (
   
      <router>
         <main>
        <Switch>
          <Route path="/loggedIn" component={PlantContainer} />
          <Route path="/" component={Login} exact />
        </Switch>
        </main>
      </router>
    
  );
};

export default App;
