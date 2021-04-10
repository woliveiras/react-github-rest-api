import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { GoSearch } from 'react-icons/go'

import './Search.sass'

const Search = () => {
  const [user, setUser] = useState('')
  const history = useHistory()

  const handleSubmit = async e => {
    e.preventDefault()
    history.push(`/${user}`)
  }

  return (
    <div className='search'>
      <form className='search__form' onSubmit={e => handleSubmit(e)}>
        <input
          value={user}
          className='search__input'
          type='text'
          onChange={e => setUser(e.target.value)}
          placeholder='Pesquisar usuário do GitHub'
        />
        <button className='search__go'><GoSearch /></button>
      </form>
    </div>
  )
}

export default Search
