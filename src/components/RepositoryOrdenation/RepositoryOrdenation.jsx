import { orderBy } from 'lodash'

import './RepositoryOrdenation.sass'

const RepositoryOrdenation = ({ repositories, dispatcher }) => {
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
    <select className='repositoryOrdenation' name='ordenation' onChange={e => handleOrdenation(e)}>
      <option className='repositoryOrdenation__option' value=''>--Ordenar os repositórios--</option>
      <option className='repositoryOrdenation__option' value='stargazers_count_asc'>Estrelas Crescente</option>
      <option className='repositoryOrdenation__option' value='stargazers_count_desc'>Estrelas Decresente</option>
      <option className='repositoryOrdenation__option' value='name_asc'>Nome Crescente</option>
      <option className='repositoryOrdenation__option' value='name_desc'>Nome Decresente</option>
    </select>
  )
}

export default RepositoryOrdenation
