import { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import Loader from 'react-loader-spinner'

import { useAppContext } from '../context/appContext'

import UserCard from '../components/Card/UserCard'
import LinkCard from '../components/Card/LinkCard'
import Error from '../components/Error'
import Heading from '../components/Typography/Heading'

export default function UserDetail () {
  const { user } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const { state, dispatch } = useAppContext()

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
            <Link to={`/${state.user?.login}/repositories`}>Conferir os repositórios</Link>
          </LinkCard>
        </>
      )}
    </>
  )
}
