import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loader from 'react-loader-spinner'

import { useAppContext } from '../context/appContext'

import Error from '../components/Error'
import Heading from '../components/Typography/Heading'
import RepositoryCard from '../components/Repositories/RepositoryCard'
import RepositoryList from '../components/Repositories/RepositoryList'
import RepositoryOrdenation from '../components/Repositories/RepositoryOrdenation'

export default function UserRepositories () {
  const { user } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const { state, dispatch } = useAppContext()

  const dispatchOrdenation = ordenatedRepositories =>
    dispatch({
      type: 'SET_REPOSITORIES_DATA',
      repositories: ordenatedRepositories
    })

  useEffect(() => {
    const fetchUser = async user => {
      setIsLoading(true)
      await axios.get(`https://api.github.com/users/${user}/repos`)
        .then(response => {
          setIsLoading(false)
          dispatch({
            type: 'SET_REPOSITORIES_DATA',
            repositories: response.data
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
      {isLoading && (
        <Loader
          type='TailSpin'
          color='#5194f0'
          height={100}
          width={100}
          timeout={3000}
        />
      )}
      {(!isLoading && state.error) && <Error />}
      {(!isLoading && !state.error) && (
        <>
          <Heading type='title'>Repos @{user}</Heading>
          {state.repositories?.length === 0 && <p>O usuário não possui repositórios :(</p>}
          <RepositoryOrdenation repositories={state.repositories} dispatcher={dispatchOrdenation} />
          <RepositoryList repositories={state.repositories} />
        </>
      )}
    </>
  )
}
