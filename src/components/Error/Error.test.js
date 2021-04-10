import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Error from './Error'

describe('Error', () => {
  it('Should be render Error', () => {
    const { container } = render(<Error />)
    expect(container.querySelector('.error')).toBeInTheDocument()
  })
})
