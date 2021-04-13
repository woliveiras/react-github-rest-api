import { Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import UserDetail from './pages/UserDetail'
import UserRepositories from './pages/UserRepositories'

const Routes = () => (
  <Switch>
    <Route exact path='/'><Home /></Route>
    <Route exact path='/:user'><UserDetail /></Route>
    <Route path='/:user/repositories'><UserRepositories /></Route>
  </Switch>
)

export default Routes
