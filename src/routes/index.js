import React from 'react';
import Home from '../components/home/Home';
import Detail from '../components/detail/Detail';
import NotFound from '../components/common/notFound';
import {history} from '../redux/store';
import { Route, Switch} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';


const routeconfig =(
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/detail/:id" component={Detail}></Route>
      <Route component={NotFound}></Route>
    </Switch>
  </ConnectedRouter>
);

export default routeconfig;
