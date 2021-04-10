import { orderBy } from 'lodash'

import './RepositoryOrdenation.sass'

const RepositoryOrdenation = ({ repositories, dispatcher }) => {
  const hasRepositories = repositories?.length > 0

  const handleOrdenation = e => {
    const userChoice = e.target.value
    const ordenationTypes = {
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
    }
    const ordenated =
            orderBy(
              repositories,
              [ordenationTypes[userChoice].key],
              [ordenationTypes[userChoice].direction]
            )

    dispatcher(ordenated)
  }

  return (
    <>
      {hasRepositories && 
        <select className='repositoryordenation' name='ordenation' onChange={e => handleOrdenation(e)}>
          <option className='repositoryordenation__option' value=''>--Ordenar os repositórios--</option>
          <option className='repositoryordenation__option' value='stargazers_count_asc'>Estrelas Crescente</option>
          <option className='repositoryordenation__option' value='stargazers_count_desc'>Estrelas Decresente</option>
          <option className='repositoryordenation__option' value='name_asc'>Nome Crescente</option>
          <option className='repositoryordenation__option' value='name_desc'>Nome Decresente</option>
        </select>
    }
    </>
  )
}

export default RepositoryOrdenation
