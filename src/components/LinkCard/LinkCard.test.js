import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import LinkCard from './LinkCard'

describe('LinkCard', () => {
  it('Should be render LinkCard with children', () => {
    const { container, getByText } = render(
      <LinkCard>React & GitHub Rest API Test</LinkCard>
    )
    expect(getByText(/React & GitHub Rest API Test/i)).toBeInTheDocument()
    expect(container.querySelector('.linkcard')).toBeInTheDocument()
  })
})
