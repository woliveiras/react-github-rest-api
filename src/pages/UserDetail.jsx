import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'

import { useCustomUseContext } from '../context/reactGitHubApiContext'

import UserCard from '../components/UserCard'

export default function UserDetail() {
  const { user } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const { state, dispatch } = useCustomUseContext()

  useEffect(() => {
    const fetchUser = async user => {
      setIsLoading(true)
      await axios.get(`https://api.github.com/users/${user}`)
        .then(response => {
          setIsLoading(false)
          dispatch({
              type: 'SET_USER_DATA',
              user: response.data
          })
        })
        .catch(error => {
          setIsLoading(false)
          dispatch({
              type: 'SET_FETCH_ERROR',
              error: error
          })
        })
    }

    fetchUser(user)

  }, [user, dispatch])

  return (
    <>
      {isLoading && <span>Carregando...</span>}
      {(!isLoading && state.error) && <span>Erro</span>}
      {(!isLoading && !state.error) && (
        <>
          <h1>Detalhes de usuário</h1>
          <UserCard 
            avatarUrl={state.user?.avatar_url}
            login={state.user?.login}
            name={state.user?.name}
            bio={state.user?.bio}
            followers={state.user?.followers}
            following={state.user?.following}
            location={state.user?.location}
          />
          <Link to={`/${state.user?.login}/repositories`}>Repositórios</Link>
        </>
      )}
    </>
  );
}
