import { Link } from 'react-router-dom'
import { GoMarkGithub } from 'react-icons/go'

import Routes from './Routes'

import { ContextProvider } from './app/context/appContext'
import Search from './components/Search'

import './App.sass'

export default function App () {
  return (
    <ContextProvider>
      <div className='app'>
        <header className='app__header'>
          <Link to='/'>
            <GoMarkGithub className='app__icon' />
          </Link>
          <Search />
        </header>
        <main className='app__content'>
          <Routes />
        </main>
      </div>
    </ContextProvider>
  )
}
