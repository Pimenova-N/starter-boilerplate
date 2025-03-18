import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Main = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Route path={`${match.url}/home`} component={lazy(() => import(`./home`))} />
      <Route path={`${match.url}/ecommerce`} component={lazy(() => import(`./ecommerce`))} />
      <Route path={`${match.url}/orders`} component={lazy(() => import(`./orders`))} />
      <Route path={`${match.url}/clients`} component={lazy(() => import(`./clients`))} />
      <Route path={`${match.url}/banners`} component={lazy(() => import(`./banners`))} />
      <Route path={`${match.url}/promocodes`} component={lazy(() => import(`./promocodes`))} />
      <Route path={`${match.url}/offline-points`} component={lazy(() => import(`./offline-points`))} />
      <Route path={`${match.url}/employees`} component={lazy(() => import(`./employees`))} />
      <Route path={`${match.url}/mail`} component={lazy(() => import(`./mail`))} />
      <Redirect from={`${match.url}`} to={`${match.url}/home`} />
    </Switch>
  </Suspense>
);

export default Main;