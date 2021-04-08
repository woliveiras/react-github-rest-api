import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

import { useCustomUseContext } from '../context/reactGitHubApiContext'

import RepositoryCard from '../components/RepositoryCard'

export default function UserRepositories() {
  const { user } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const { state, dispatch } = useCustomUseContext()

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
      {isLoading && <span>Carregando...</span>}
      {(!isLoading && state.error) && <span>Erro</span>}
      {(!isLoading && !state.error) && (
        <>
          <h1>Repositórios de @{state.repositories?.[0].owner.login}</h1>
          <ul className=''>
            {state.repositories?.map(repo => 
              (<li key={repo.name}>
                <RepositoryCard 
                  name={repo.name}
                  repoUrl={repo.html_url}
                  starts={repo.stargazers_count}
                  license={repo.license?.name}
                />
              </li>))}
          </ul>
        </>
      )}
    </>
  );
}
