import React from 'react';

import { Switch, Route, useRouteMatch } from 'react-router-dom';

import List from '~/pages/Deliverymans/List';
import Form from '~/pages/Deliverymans/Form';

export default function Routes() {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={path} exact component={List} />
      <Route path={`${path}/add`} component={Form} />
      <Route path={`${path}/edit/:id`} component={Form} />
    </Switch>
  );
}
