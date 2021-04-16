import { Route, Switch } from 'react-router-dom'

import Home from './views/Home'
import UserDetail from './views/UserDetail'
import UserRepositories from './views/UserRepositories'

const Routes = () => (
  <Switch>
    <Route exact path='/'><Home /></Route>
    <Route exact path='/:user'><UserDetail /></Route>
    <Route path='/:user/repositories'><UserRepositories /></Route>
  </Switch>
)

export default Routes
