import { Route, Switch, Link } from "react-router-dom"
import { GoOctoface } from "react-icons/go"

import Home from './pages/Home'
import UserDetail from './pages/UserDetail'
import UserRepositories from './pages/UserRepositories'

import { ContextProvider } from './context/reactGitHubApiContext'
import Search from './components/Search'

import './App.sass'

export default function App() {
  return (
    <ContextProvider>
      <div className='app'>
        <header className='app__header'>
          <Link to='/'>
            <GoOctoface className='app__header__icon' />
          </Link>
          <Search />
        </header>
        <main className='app__content'>
          <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/:user"><UserDetail /></Route>
            <Route path="/:user/repositories"><UserRepositories /></Route>
        </Switch>
        </main>
      </div>
    </ContextProvider>
  );
}
