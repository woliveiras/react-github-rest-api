import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Loader from 'react-loader-spinner'

import { useAppContext } from '../app/context/appContext'
import fetchUser from '../app/services/fetchUser'

import { LinkCard } from '../components/Cards'
import UserCard from '../components/UserCard'
import Error from '../components/Error'
import Heading from '../components/Typography/Heading'

export default function UserDetail () {
  const { user } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const { state, dispatch } = useAppContext()

  useEffect(() => {
    setIsLoading(true)
    fetchUser(user)
      .then(userData => {
        setIsLoading(false)
        dispatch({
          type: 'SET_USER_DATA',
          user: userData
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
          <Heading
            type='subtitle'
            text='Detalhes de usuário'
          />
          <UserCard
            avatarUrl={state.user?.avatar_url}
            login={state.user?.login}
            name={state.user?.name}
            bio={state.user?.bio}
            followers={state.user?.followers}
            following={state.user?.following}
            location={state.user?.location}
          />
          <LinkCard>
            <Link to={`/${state.user?.login}/repositories`}>
              Conferir os repositórios
            </Link>
          </LinkCard>
        </>
      )}
    </>
  )
}
