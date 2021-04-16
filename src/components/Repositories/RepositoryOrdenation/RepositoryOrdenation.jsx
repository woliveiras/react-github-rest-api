import { useMemo } from 'react'
import { orderBy } from 'lodash'

import './RepositoryOrdenation.sass'

const RepositoryOrdenation = ({ repositories = [], dispatcher = null }) => {
  const hasRepositories = repositories?.length > 0
  const ordenationOptions = useMemo(() => ({
    stargazers_count_asc: {
      key: 'stargazers_count',
      direction: 'asc'
    },
    stargazers_count_desc: {
      key: 'stargazers_count',
      direction: 'desc'
    },
    name_asc: {
      key: 'name',
      direction: 'asc'
    },
    name_desc: {
      key: 'name',
      direction: 'desc'
    }
  }))

  const handleOrdenation = (userChoice, options, dispatch) => {
    const ordenatedRepositories =
      orderBy(
        repositories,
        [options[userChoice].key],
        [options[userChoice].direction]
      )

    dispatch(ordenatedRepositories)
  }

  return (
    <>
      {hasRepositories &&
        <select
          className='repositoryordenation'
          name='ordenation'
          onChange={e => handleOrdenation(
            e.target.value, ordenationOptions, dispatcher
          )}
        >
          <option
            className='repositoryordenation__option'
            value='name_asc'>--Ordenar os repositórios--</option>
          <option
            className='repositoryordenation__option'
            value='stargazers_count_asc'>Estrelas Crescente</option>
          <option
            className='repositoryordenation__option'
            value='stargazers_count_desc'>Estrelas Decresente</option>
          <option
            className='repositoryordenation__option'
            value='name_asc'>Nome Crescente</option>
          <option
            className='repositoryordenation__option'
            value='name_desc'>Nome Decresente</option>
        </select>}
    </>
  )
}

export default RepositoryOrdenation
