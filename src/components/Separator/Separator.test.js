import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Separator from '../Separator/Separator'

describe('Separator', () => {
  it('Should be render Separator', () => {
    const { container } = render(<Separator />)
    expect(container.querySelector('.separator')).toBeInTheDocument()
  })
})
