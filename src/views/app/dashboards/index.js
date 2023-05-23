import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
// import { ProtectedRoute, UserRole } from 'helpers/authHelper';

const DashboardDefault = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-default" */ './default')
);

const ContentDefault = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-content" */ './content')
);
const AnalyticsDefault = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-analytics" */ './analytics')
);
const EcommerceDefault = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-ecommerce" */ './ecommerce')
);
const ProfileDefault = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-profile" */ './user-profile')
);
const Todo = React.lazy(() =>
  import(/* webpackChunkName: "applications-todo" */ '../applications/todo')
);
const Layehe = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-layehe" */ './layehe')
);
const Search = React.lazy(() =>
  import(/* webpackChunkName: "dashboard-layehe" */ './search')
);

const Dashboards = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/default`} />
      <Route
        path={`${match.url}/default`}
        render={(props) => <DashboardDefault {...props} />}
      />
      <Route
        path={`${match.url}/content`}
        render={(props) => <ContentDefault {...props} />}
      />
      <Route
        path={`${match.url}/ecommerce`}
        render={(props) => <EcommerceDefault {...props} />}
      />
      <Route
        path={`${match.url}/profile`}
        render={(props) => <ProfileDefault {...props} />}
      />
      <Route
        path={`${match.url}/analytics`}
        render={(props) => <AnalyticsDefault {...props} />}
      />
      <Route
        path={`${match.url}/todo`}
        render={(props) => <Todo {...props} />}
      />
       <Route
        path={`${match.url}/layehe`}
        render={(props) => <Layehe {...props} />}
      />
       <Route
        path={`${match.url}/search`}
        render={(props) => <Search {...props} />}
      />

      {/* 
      <ProtectedRoute
        path={`${match.url}/default`}
        component={DashboardDefault}
        roles={[UserRole.Admin]}
      />
      <ProtectedRoute
        path={`${match.url}/content`}
        component={ContentDefault}
        roles={[UserRole.Admin]}
      />
      <ProtectedRoute
        path={`${match.url}/ecommerce`}
        component={EcommerceDefault}
        roles={[UserRole.Operator]}
      />
      <ProtectedRoute
        path={`${match.url}/analytics`}
        component={AnalyticsDefault}
        roles={[UserRole.Operator]}
      />
      */}

      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default Dashboards;
