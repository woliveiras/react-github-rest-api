import React from 'react'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Search from '../Search'

describe('Search', () => {
  const history = createMemoryHistory()
  history.push = jest.fn()

  const setup = () => {
    const { container } = render(
      <Router history={history}>
        <Search />
      </Router>
    )
    const input = container.querySelector('input')
    return {
      input,
      container
    }
  }
  it('Should be render Search', () => {
    const { input } = setup()
    expect(input).toHaveAttribute('placeholder', 'Pesquisar usuário do GitHub')
  })

  it('Should be update value with user input', () => {
    const { input } = setup()
    fireEvent.change(input, { target: { value: 'woliveiras' } })
    expect(input.value).toBe('woliveiras')
  })

  it('Should be change location with correct user when submit', () => {
    const { container, input } = setup()
    fireEvent.change(input, { target: { value: 'woliveiras' } })
    fireEvent.click(container.querySelector('.search__go'))
    expect(history.push).toHaveBeenCalledWith('/woliveiras')
  })
})
