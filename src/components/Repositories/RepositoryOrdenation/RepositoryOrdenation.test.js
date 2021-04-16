import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import RepositoryOrdenation from '.'
import { repositories } from './RepositoryOrdenation.props'

describe('RepositoryOrdenation', () => {
  const setup = () => {
    const dispatcherMock = jest.fn()
    const { container, getByText } = render(
      <RepositoryOrdenation
        repositories={repositories}
        dispatcher={dispatcherMock} />
    )
    const repositoryOrdenation = container.querySelector('repositoryordenation')
    return {
      dispatcherMock,
      container,
      getByText,
      repositoryOrdenation
    }
  }

  it('Should not render when dont receive repositories', () => {
    const dispatcherMock = jest.fn()
    const { container } = render(
      <RepositoryOrdenation repositories={[]} dispatcher={dispatcherMock} />
      )
    expect(container.querySelector('repositoryordenation'))
      .not.toBeInTheDocument()
  })

  it('Should be render RepositoryOrdenation', () => {
    const { getByText } = setup()
    expect(getByText('--Ordenar os repositórios--')).toBeInTheDocument()
    expect(getByText('Estrelas Crescente')).toBeInTheDocument()
    expect(getByText('Estrelas Decresente')).toBeInTheDocument()
    expect(getByText('Nome Crescente')).toBeInTheDocument()
    expect(getByText('Nome Decresente')).toBeInTheDocument()
  })

  it('Should be call dispatcherMock when update ordenation', () => {
    const { dispatcherMock, container } = setup()
    fireEvent.change(
      container.querySelector('.repositoryordenation'),
      { target: { value: 'stargazers_count_asc' } }
    )
    expect(dispatcherMock).toHaveBeenCalled()
  })
})
