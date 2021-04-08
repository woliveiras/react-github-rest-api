import { Route, Switch } from "react-router-dom"

import Home from './pages/Home'
import UserDetail from './pages/UserDetail'
import UserRepositories from './pages/UserRepositories'

import { ContextProvider } from './context/reactGitHubApiContext'
import Search from './components/Search'

export default function App() {
  return (
    <ContextProvider>
      <main>
        <Search />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/:user"><UserDetail /></Route>
          <Route path="/:user/repositories"><UserRepositories /></Route>
      </Switch>
      </main>
    </ContextProvider>
  );
}
