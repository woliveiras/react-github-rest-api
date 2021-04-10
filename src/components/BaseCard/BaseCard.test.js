import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import BaseCard from './BaseCard'

describe('BaseCard', () => {
  it('Should be render BaseCard with children', () => {
    const { container, getByText } = render(
      <BaseCard>React & GitHub Rest API Test</BaseCard>
    )
    expect(getByText(/React & GitHub Rest API Test/i)).toBeInTheDocument()
    expect(container.querySelector('.basecard')).toBeInTheDocument()
  })
})
