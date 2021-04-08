import { Route, Switch } from "react-router-dom"

import Home from './pages/Home'
import UserDetail from './pages/UserDetail'

import { ContextProvider } from './context/reactGitHubApiContext'
import Search from './components/Search'

export default function App() {
  return (
    <ContextProvider>
      <main>
        <Search />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/:user"><UserDetail /></Route>
      </Switch>
      </main>
    </ContextProvider>
  );
}
