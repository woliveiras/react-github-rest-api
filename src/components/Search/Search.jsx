import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Search = () => {
    const [user, setUser] = useState('')
    const history = useHistory()

    const handleSubmit = async e => {
        e.preventDefault()
        history.push(`/${user}`)
    }

    return (
        <>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" onChange={e => setUser(e.target.value)} placeholder='Usuário do GitHub'/>
                <button>Search</button>
            </form>
        </>
    )
}

export default Search
