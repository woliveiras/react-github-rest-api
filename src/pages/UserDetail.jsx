import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import { useCustomUseContext } from '../context/reactGitHubApiContext'

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
      {state.error && <span>Erro</span>}
      <img src={state.user?.avatar_url} alt=""/>
    </>
  );
}
