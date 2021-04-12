import React from 'react'
import { render } from '@testing-library/react'

import RepositoryList from '.'
import { repositories } from './RepositoryList.props'

describe('RepositoryList', () => {
  it('Should not render when dont receive repositories', () => {
    const { container } = render(<RepositoryList repositories={[]} />)
    expect(container.querySelector('ul')).not.toBeInTheDocument()
  })

  it('Should render when receive repositories', () => {
    const { container } = render(<RepositoryList repositories={repositories} />)
    expect(container.querySelector('ul')).toBeInTheDocument()
  })
})
