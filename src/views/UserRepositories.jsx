import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from 'react-loader-spinner'

import { useAppContext } from '../app/context/appContext'
import fetchRepositories from '../app/services/fetchRepositories'

import Error from '../components/Error'
import Heading from '../components/Typography/Heading'
import { RepositoryList, RepositoryOrdenation } from '../components/Repositories'

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
    setIsLoading(true)
    fetchRepositories(user)
      .then(repositories => {
        setIsLoading(false)
        dispatch({
          type: 'SET_REPOSITORIES_DATA',
          repositories: repositories
        })
      })
      .catch(error => {
        setIsLoading(false)
        dispatch({
          type: 'SET_FETCH_ERROR',
          error: error
        })
      })
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
