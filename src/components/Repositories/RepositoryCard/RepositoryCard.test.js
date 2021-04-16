import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import RepositoryCard from './RepositoryCard'

describe('RepositoryCard', () => {
  it('Should be render RepositoryCard with correct props', () => {
    const { container, getByText } = render(
      <RepositoryCard
        name='algorithms'
        repoUrl='https://github.com/woliveiras/algorithms'
        starts='4'
        license='MIT License'
      />
    )
    expect(container.querySelector('.basecard')).toBeInTheDocument()
    expect(getByText(/algorithms/i)).toBeInTheDocument()
    expect(getByText(/4/i)).toBeInTheDocument()
    expect(getByText(/MIT License/i)).toBeInTheDocument()
    expect(container.querySelector('a'))
      .toHaveAttribute('href', 'https://github.com/woliveiras/algorithms')
  })
})
