import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import UserCard from './UserCard'

describe('UserCard', () => {
  it('Should be render UserCard with correct props', () => {
    const { container, getByText } = render(
      <UserCard
        avatarUrl='https://avatars.githubusercontent.com/u/4243601?v=4'
        login='woliveiras'
        name='William Oliveira'
        bio='Software Painter |  UI Engineer'
        followers={1652}
        following={719}
        location='Brazil'
      />
    )

    expect(getByText(/@woliveiras/i)).toBeInTheDocument()
    expect(getByText(/William Oliveira/i)).toBeInTheDocument()
    expect(getByText(/Software Painter | {2}UI Engineer/i)).toBeInTheDocument()
    expect(getByText(/1652/i)).toBeInTheDocument()
    expect(getByText(/719/i)).toBeInTheDocument()
    expect(getByText(/Brazil/i)).toBeInTheDocument()
    expect(container.querySelector('img'))
      .toHaveAttribute('src', 'https://avatars.githubusercontent.com/u/4243601?v=4')
    expect(container.querySelector('img'))
      .toHaveAttribute('alt', 'Foto de perfil de William Oliveira')
  })
})
